let sidebar = [
	{
		title: 'Getting started',
		children: [
			['getting-started/welcome', 'Welcome'],
			['getting-started/installation', 'Installation'],
			['getting-started/setup-guide', 'Setup guide'],
			['getting-started/itcss', 'ITCSS']
		]
	},
	{
		title: 'Base Principles',
		children: [
			['base-principles/space-unit-grid.md', '! Space-Unit Grid'],
			['base-principles/modular.md', '! Modular'],
			['base-principles/responsive-typography.md', '! Responsive Typography'],
			['base-principles/responsive-layout.md', '! Responsive Layout'],
		]
	},
	{
		title: 'Settings',
		children: [
			['settings/viewports.md', 'Viewports'],
			['settings/space-units.md', 'Space Units'],
			['settings/support-legacy.md', 'Support & Legacy Browers'],
		]
	},
	{
		title: 'Layout',
		children: [
			['layout/layout-presets.md', 'Layout Presets'],
			['layout/layout-classes.md', 'Layout Classes'],
			['layout/margin.md', '@Margins'],
			['layout/padding.md', '@Paddings'],
			['layout/position.md', '@Positions'],
			['layout/width-height.md', '@Width & @Height'],
			['layout/property.md', '@Custom Properties'],
		]
	},
	{
		title: 'Typography',
		children: [
			['typography/font-presets.md', 'Font Presets'],
			['typography/text-presets.md', 'Text Presets'],
			['typography/vertical-alignments.md', 'Vertical Alignment'],
			['typography/self-classes.md', 'Self Classes'],
		]
	},
	{
		title: 'Utility Classes',
		children: [
			['utility-classes/trim.md', 'Trim'],
			['utility-classes/fit.md', 'Fit'],
			['utility-classes/implode.md', 'Implode'],
			['utility-classes/shift.md', 'Shift'],
		]
	},
	{
		title: 'Functions',
		children: [
			['functions/su.md', 'Su()'],
		]
	},
	{
		title: '3rd party support',
		children:[
			['3rd-party/foundation','Zurb Foundation']
		]
	}
//	{
//		title: 'External Links',
//		children:[
//			['https://www.npmjs.com/package/spaceframework','NPM'],
//			['https://github.com/HarwinBorger/SpaceFramework','Github'],
//		]
//	},
];

const path = require("path");


let navbar = [
//	{text: 'Home', link: '/'},
	{text: 'DOCS', link: '/'},
	{text: 'SpaceFramework.dev', link: 'https://spaceframework.dev'},
	{text: 'Github SpaceFramework', link: 'https://github.com/HarwinBorger/SpaceFramework'},
	{text: 'Github SpaceDocumentation', link: 'https://github.com/HarwinBorger/SpaceDocumentation'},
];

module.exports = {
	title: 'SpaceFramework',
	description: 'Just playing around',
	base: '/',
	themeConfig: {
		sidebar: sidebar,
		nav: navbar,
		// Assumes GitHub. Can also be a full GitLab url.
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
	},
	markdown: {
		toc: {includeLevel: [2,3]},
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				'ga': 'UA-142104628-2' // UA-00000000-0
			}
		]
	]
};
