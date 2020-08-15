<template>
	<Example raster>
		<div class="space-unit-example trim align-baseline">
			<p class="text-preset-default">
				<span class="inline-su-1"></span> The red block is 1 space unit height and width.
			</p>

			<p class="text-preset-default">It is in a container with 2 space units padding.</p>

			<p class="text-preset-default">And each paragraph has a lineheight of 2 space units and a vertical margin of
				1 space unit</p>

			<p class="text-preset-default">Each line is aligned on the baseline</p>
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