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
		title: 'Settings',
		children: [
			['settings/viewports.md', 'Viewports'],
			['settings/support-legacy.md', 'Support & Legacy Browers'],
		]
	},
	{
		title: 'Space Units',
		children: [
			['space-units/space-units.md', 'Introduction and configuration'],
			['space-units/su-function.md', 'Su()'],
			['space-units/margin.md', '@Margins'],
			['space-units/padding.md', '@Paddings'],
			['space-units/position.md', '@Positions'],
			['space-units/width-height.md', '@Width & @Height'],
			['space-units/property.md', '@Custom Properties'],
		]
	},
	{
		title: 'Grid & Layout',
		children: [
//			['grid-layout/grid.md', 'Grid'],
//			['grid-layout/grid-template.md', 'Grid Template'],
//			['grid-layout/space-presets.md', 'Space Presets'],
			['grid-layout/layout-presets.md', 'Layout Presets'],
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
			['utility-classes/implode.md', 'Implode'],
			['utility-classes/fit.md', 'Fit'],
		]
	},
	{
		title: '3rd party support',
		children: [
			['3rd-party/foundation', 'Zurb Foundation']
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
	{text: 'Home', link: 'https://spaceframework.dev'},
	{text: 'Docs', link: '/'},
	{
		text: 'Tools', items: [/*  */
			{text: 'Fonts', link: 'https://fonts.spaceframework.dev'},
		]
	}
];

module.exports = {
	title: 'SpaceFramework v1.0',
	description: 'Just playing around',
	base: '/',
	themeConfig: {
		sidebar: sidebar,
		nav: navbar,
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'HarwinBorger/SpaceFramework',
		docsRepo: 'HarwinBorger/SpaceDocumentation',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		lastUpdated: 'Last Updated', // string | boolean
	},
	markdown: {
		toc: {includeLevel: [2]},
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
