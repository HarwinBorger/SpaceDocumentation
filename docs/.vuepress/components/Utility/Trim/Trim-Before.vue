<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-trim-margin">{{ content }}</div>
			<div class="example-element example-trim-margin">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Trim',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-trim-margin {
		@include margin-vertical(3);
		@include padding(1);
		line-height: su(2);
	}
</style>