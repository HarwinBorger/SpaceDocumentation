# Layout Presets

Within layout presets you define the global spacings of a layout. A good design uses only several different spacing types. Those are spacings between and inside  sections, elements, blocks etc. Those spacings may be different on different viewports. All of those settings can be defined in layout-presets.

## Generation of classes
As a result you never have to define the spacings on your sections, elements and block any longer. From now on you can use layout-classes for that.  

Learn more about applying [Layout Classes](layout/layout-classes.md)


**Table of content**
- [Setup](#setup)

## Setup

### 1. Copy configuration file
Copy `spaceframework/scss/1.settings/layouts-presets.scss` to your scss project. Or copy it to your `1.settings` directory within an [ITCSS structure](getting-started/itcss.md)

### 2. Configurating the `$layout-preset` 
If you would start empty you start with
```scss
$layout-presets: (
	// add your settings here
);
```
### 3. Adding a layout 
Add a layout size such as `section`. Then add viewport sizes. For each size you can define the offset of a section written in [space-units](/settings/space-units.md)
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
 