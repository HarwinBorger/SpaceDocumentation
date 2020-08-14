<template>
	<Example>
		<div class="example-overflow bg-padding  example-baseline-padding">
			<div class="example-overflow  bg-white-o-20 align-baseline">
				<div class="text-preset-xlarge">xLarge</div>
				<div class="text-preset-default">Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere
					consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
					euismod.
				</div>
			</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'TextPreset',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-baseline-padding {
		@include padding(2, 2, 2, 2);
	}
</style>