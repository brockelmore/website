<script>
	export let name
	export let start = 0
	export let end = 255
	export let locked = false
	export let showU8 = true
	export let bordered = true;
	let leftHandle
	let rightHandle
	let body
	let slider
	let active

	function draggable(node) {
      const onDown = getOnDown(node);

      node.addEventListener("touchstart", onDown);
      node.addEventListener("mousedown", onDown);
      return {
        destroy() {
          node.removeEventListener("touchstart", onDown);
          node.removeEventListener("mousedown", onDown);
        }
      };
    }

    function getOnDown(node) {
      const onMove = getOnMove();

      return function (e) {
        e.preventDefault();
        node.dispatchEvent(new CustomEvent("dragstart"));

        const moveevent = "touches" in e ? "touchmove" : "mousemove";
        const upevent = "touches" in e ? "touchend" : "mouseup";

        document.addEventListener(moveevent, onMove);
        document.addEventListener(upevent, onUp);

        function onUp(e) {
          e.stopPropagation();

          document.removeEventListener(moveevent, onMove);
          document.removeEventListener(upevent, onUp);

          node.dispatchEvent(new CustomEvent("dragend"));
        };
      };
    }

	function getOnMove() {
		if (!locked) {
			return function (evt) {
				const { left, right } = slider.getBoundingClientRect()
				const clickOffset = "touches" in evt ? evt.touches[0].clientX : evt.clientX;
				const p = Math.min(Math.max(clickOffset - left, 0), 255)
				if (active === 'start') {
					start = Math.floor(p)
					end = Math.floor(Math.max(end, p))
				} else {
					start = Math.floor(Math.min(p, start))
					end = Math.floor(p)
				}
			}
		} else {
		  return function(e) {}
		}
	}
	function setHandlesFromBody(evt) {}

	let impossible = false
	$: impossible = end < start
</script>

<div class="not-prose prose-limit flex flex-col w-full justify-center items-center">
    <div class="not-prose flex w-full relative justify-center w-[355px] pt-[75px] pb-[95px] prose-limit bg-gray-2"
        class:border={!bordered}
        class:rounded={bordered}
        class:border-gray-3={!bordered}>
    	<div class="not-prose w-full relative flex justify-center">
    		{#if name !== undefined}
    			<div class="not-prose text-xl absolute bottom-[20px]" class:bg-red-600={impossible}>{name}</div>
    		{/if}
    		<div class="slider" bind:this={slider}>
    			<div
    				class="not-prose body"
    				bind:this={body}
    				class:bg-blue-500={!impossible}
    				class:bg-red-600={impossible}
    				style="
    				left: {100 * (start / 256)}%;
    				right: {100 * (1 - end / 256)}%;
    			"
    			/>
    			<div class="not-prose edge" class:after:bg-gray-7={!impossible} class:after:bg-red-600={impossible}/>
    			<div
    				class="not-prose handle lower_handle after:bg-yellow-400"
    				class:grabbable={!locked}
    				bind:this={leftHandle}
    				data-which="start"
    				use:draggable
  				    on:dragstart={() => (active = "start")}
                    on:dragend={() => (active = "")}
    				role="slider"
    				aria-valuemin="0"
    				aria-valuemax="255"
    				aria-valuenow={start}
    				tabindex="0"
    				style="
    				left: {100 * (start / 256)}%
    			"
    			/>
    			<div
    				class="not-prose handle upper_handle after:bg-green-400"
    				class:grabbable={!locked}
    				bind:this={rightHandle}
    				data-which="end"
    				use:draggable
    				on:dragstart={() => (active = "end")}
                    on:dragend={() => (active = "")}
    				role="slider"
    				aria-valuemin="0"
    				aria-valuemax="255"
    				aria-valuenow={end}
    				tabindex="0"
    				style="
    				left: {100 * (end / 256)}%
    			"
    			/>
    			<div class="not-prose labels pt-5">
    				<div
    					class="label"
    					style="
    				left: {start - (start.toString().length - 3) * -4}px
    			"
    				>
    					{start}
    				</div>
    				<div
    					class="label relative"
    					style="
    				left: {end}px
    			"
    				>
    					{end}
    				</div>
    			</div>
    			<div class="not-prose edge" class:after:bg-gray-7={!impossible} class:after:bg-red-600={impossible} style="left: 255px" />
    			{#if showU8}
    				<div class="not-prose min">uint8.min</div>
    				<div class="not-prose max">uint8.max</div>
    			{/if}
    		</div>
    	</div>
    </div>
</div>

<style>
	.slider {
		position: relative;
		width: 256px;
		height: 3px;
		background-color: #525252;
	}
	.handle {
		position: absolute;
		top: 50%;
		width: 0;
		height: 0;
		z-index: 99;
	}
	.edge {
		position: absolute;
		top: 50%;
		width: 0;
		height: 0;
	}
	.edge:after {
		content: ' ';
		box-sizing: border-box;
		position: absolute;
		width: 2px;
		height: 35px;
		transform: translate(-50%, -50%);
	}
	.lower_handle:after {
		content: ' ';
		box-sizing: border-box;
		position: absolute;
		width: 3px;
		height: 35px;
		transform: translate(-50%, -50%);
	}
	.upper_handle:after {
		content: ' ';
		box-sizing: border-box;
		position: absolute;
		width: 3px;
		height: 65px;
		top: 15px;
		transform: translate(-50%, -50%);
	}
	.grabbable:hover {
		cursor: grab;
		background-color: #ddd;
		width: 5px !important;
	}
	.handle:active:after {
		background-color: #ddd;
		z-index: 9;
	}
	.body {
		top: 0;
		position: absolute;
		bottom: 0;
	}
	.label:first-child {
		position: absolute;
		top: 25px;
	}
	.label:last-child {
		position: absolute;
		top: 55px;
	}
	.labels {
		top: 5px;
	}

	.min {
		position: absolute;
		float: left;
		left: -33px;
		top: -55px;
	}
	.max {
		position: absolute;
		float: right;
		left: 215px;
		top: -55px;
	}
</style>
