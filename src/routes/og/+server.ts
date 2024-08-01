import type {RequestHandler} from "@sveltejs/kit";
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';
import { read } from '$app/server';
import OG from "./OG.svelte";


import dmsans from '$lib/fonts/DMSans-Regular.ttf';
const fontData = read(dmsans).arrayBuffer();

async function componentToPng(component, props, height, width) {
  let fnt = await fontData
	const result = component.render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
  	width: 1200,
   height: 600,
		fonts: [
			{
				name: 'DMSans',
				data: fnt,
				weight: 400,
				style: 'normal'
			}
		],
	},);

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}

export const GET: RequestHandler = async ({url}) => {
  const description = url.searchParams.get('description') ?? undefined;
  const title = url.searchParams.get('title') ?? undefined;
  return componentToPng(OG, {description: description, title: title}, 1200, 600);
};
