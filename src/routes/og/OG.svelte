<script>
    import radixColors from '@radix-ui/colors';

    const BLUE_1 = radixColors.greenDark.green1;
    const BLUE_2 = radixColors.greenDark.green2;
    const BLUE_3 = radixColors.greenDark.green3;
    const BLUE_4 = radixColors.greenDark.green4;
    const BLUE_6 = radixColors.greenDark.green6;
    const BLUE_9 = radixColors.greenDark.green9;
    const BLUE_11 = radixColors.greenDark.green11;
    const BLUE_12 = radixColors.greenDark.green12;
    export let description
    export let title = ''
</script>


<div
    style:padding=12
    style:background={BLUE_2}
    style:display={'flex'}
    style:alignItems={'center'}
    style:justifyContent={'center'}
    style:width={'100%'}
    style:height={'100%'}
>
  <div
      style:padding=32
      style:background={BLUE_3}
      style:width='100%'
      style:height='100%'
      style:display='flex'
      style:flexDirection='column'
      style:justifyContent='space-between'
      style:border='2px solid'
      style:borderColor={BLUE_4}
      style:borderRadius=12
  >
    <div
        style:display='flex'
        style:flexDirection='column'
        style:width='100%'
    >
      <div
          style:display='flex'
          style:alignItems='center'
          style:width='100%'
        >
        <div
            style:display='flex'
            style:fontSize=64
            style:lineHeight=1.2
            style:color={BLUE_12}
            style:fontWeight=500
        >
          {title}
        </div>
      </div>
      {#if description}
        <div
            style:display='flex'
            style:fontSize=40
            style:lineHeight=1.5
            style:width='100%'
            style:color={BLUE_11}
            style:marginTop=32
            style:fontWeight=400
        >
          {description}
        </div>
      {/if}
    </div>
    <div
        style:display='flex'
        style:alignItems='center'
        style:justifyContent='space-between'
        style:width='100%'
    >
      <div
          style:display='flex'
          style:alignItems='center'
      >
        <div
            style:display='flex'
            style:width=64
            style:height=64
            style:justifyContent='center'
            style:alignItems='center'
        >
          <img src="https://brocke.xyz/favicon-32x32.png" />
        </div>
        <div
            style:display='flex'
            style:fontSize=40
            style:lineHeight=1.2
            style:color={BLUE_12}
            style:fontWeight=600
            style:marginLeft=16
            style:letterSpacing='-0.025em'
        >
          brock
        </div>
      </div>
      <div
          style:display='flex'
          style:fontSize=40
          style:lineHeight=1.2
          style:color={BLUE_11}
          style:fontWeight=500
      >
        /{title}
      </div>
    </div>
  </div>
</div>
