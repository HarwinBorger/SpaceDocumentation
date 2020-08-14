# Layout Presets

Within layout presets you define the global spacings of a layout. A good design uses only several different spacing types. Those are spacings between and inside  sections, elements, blocks etc. The size of spacings may be different on different viewports. All of those settings can be defined within layout-presets. Layout-presets will generate [Layout Classes](layout/layout-classes.md) which you can use to apply the spacings on your elements. 

Using layout presets for your global spacing will result in faster development and a better user-experience.  

Learn more about applying [Layout Classes](layout/layout-classes.md)


**Table of content**
[[toc]]

## Configuration
Copy `spaceframework/scss/1.settings/_layouts-presets.scss` to your scss project. Then remove `!default` at the end of the file. 

You can also create a new file named `_layout-presets.scss`:
```scss 
$layout-presets: (
	// add your settings here
);
```
### 1. Adding a new layout preset 
You can add a layout preset such as `section`. Then add viewport sizes. For each viewport size you can define the offset of a section written in [space-units](/settings/space-units.md). 
```scss {2-8}
$layout-presets: (
	section:(
		viewports:(
			small:(2),
			medium:(3),
			large:(4),
		)
	),
);
```

### 4. Generation of classes
Well done now, you can now use [layout classes](/layout/layout-classes.md).

> Please note: When you used 'advanced setup' to setup your project you have to actually call `@include layout-classes();` to generate layout-classes 


## Advanced support
You can toggle advanced support by copying `spaceframework/scss/1.settings/layouts-presets-support.scss` to your local folder scss project. 

This can be used to minimize the generation of classes. 
### Types
```scss {2-6}
$layout-presets-support: (
	types:(
		padding,
		margin,
		position
	)
	//...
)
```

### Directions
```scss {3-24}
$layout-presets-support: (
	//...
	directions:(
		top:(
			top
		),
		right:(
			right
		),
		bottom:(
			bottom
		),
		left: (
			left
		),
		vertical: (
			top,
			bottom
		),
		horizontal: (
			right,
			left
		)
	)
	//...
)
```
### Negative
```scss {3}
$layout-presets-support: (
	//...
	negative: true
	//...
);
```

### Responsive
```scss {3}
$layout-presets-support: (
	//...
	responsive: true
)
```

## Exceptions
Each of the settings (types, directions, negative, responsive) within `layout-presets-support` can be overwritten for a specific layout-preset.

In the example below we added the setting `negative: false` to the *section preset* to avoid generation of negative layout classes. 

```scss {8}
$layout-presets: (
	section:(
		viewports:(
			small:(2),
			medium:(3),
			large:(4),
		)
		negative: false
	),
);
```
 