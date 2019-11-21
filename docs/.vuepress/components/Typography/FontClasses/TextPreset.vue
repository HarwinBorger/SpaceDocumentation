<template>
	<Example raster small>
		<div class="align-baseline">
			<div class="text-preset-xlarge">xLarge</div>
			<div class="text-preset-large">large</div>
			<div class="text-preset-medium">medium</div>
			<div class="text-preset-default">default</div>
			<div class="text-preset-small">small</div>
			<div class="text-preset-tiny">tiny</div>
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
</style>