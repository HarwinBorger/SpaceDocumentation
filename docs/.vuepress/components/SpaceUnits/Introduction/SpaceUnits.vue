<template>
	<Example raster class="align-baseline">
		<div class="space-unit-example trim ">
			<p>
				<span class="inline-su-1"></span> The red block is 1 space unit height and width.
			</p>

			<p><span class="inline-su-1"></span> It is in a container with 2 space units padding.</p>

			<p><span class="inline-su-1"></span> And each paragraph has a lineheight of 2 space units and a vertical margin of
				1 space unit</p>

			<p><span class="inline-su-1"></span> Each line is aligned on the baseline</p>

			<p><span class="inline-su-1"></span> When you scale the window, the size of the space units will change</p>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SpaceUnits',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.space-unit-example {
		@include min-width(10);
		@include min-height(10);

		p {
			@include text-preset(default);
			@include margin-vertical(1);
		}
	}

	.inline-su-1 {
		display: inline-block;
		@include width(1);
		@include height(1);
		background: red;
	}
</style>