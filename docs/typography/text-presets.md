# Text Presets
It can be hard to manage all different text-styles in your website. Text-presets help you with this. Centralizing all different text-styles at one place.

[[toc]]

## Introduction
Text presets can be used to manage all different text styles in your website. This is done by centralizing text styles at one place. They are very strong for managing different `font-sizes` and `line-heights`.

### Why should I use it?
- Centralizing all text styles at one place
- Avoid writing double code
- Improve responsive typography 
- Higher CSS performance
- Less code writing
- They can be used to archive [baseline alignment](../typography/vertical-alignments.md)

### How to use?
Text-presets can be used in two ways:
- **SCSS mixin:** You can use text-presets by including them in your SCSS code. 
- **CSS classes:** Text-presets can be used by applying CSS classes to your html elements. 

## Configuration 
Adding a new text-preset is easy. Open the `1.settings/_text-presets.scss` file from your repository, or create a new file called: `_text-presets.scss`. 

### Example
Add or edit the text-presets using the following format:
```scss{2-8}
$text-presets: (
	your-custom-name:( // Your custom preset-name
		font-size: (1.5rem, 2.25rem, 3rem),
		line-height: (3, 4, 5),
		font: secondary, // (optional)
		color: #000, // (optional)
		font-weight: 500 ,// (optional)
	),
	xlarge:(//Mostly used for H1
	//...
)
```

### Specifications

- `(array)` **font-size:** ($value, $value, $value, etc)

> Add a font-size value for each viewport  (small, medium, large). You can find your viewports in `1.settings/viewports.scss`.
  
- `(array)` **line-height:** ($value, $value, $value, etc)

> Add a line-height value for each viewport  (small, medium, large). You need to use [space-units](base-principles/space-unit-grid.md) here in order to align with the [Space-Unit grid](base-principles/space-unit-grid.md)  and to use [Vertical Alignment Classes](/typography/vertical-alignments)

- `(string)` **font:** (optional) 

> Use a font from the list in [fonts](font-presets.md). When not given up the *default* will be used. 
Fill in for example: `default` or `secondary`

<Badge text="1.1+"/>
- `(string|variable)` **color:** (optional)
- `(string|variable)` **font-weight:** (optional)

## SCSS Mixin

### Specifications text-preset
```scss
@include text-preset(preset-name); 
```
- `(string)` **preset-name**:


**SCSS input**
```scss
body {
	@include text-preset(default);
}

h1 {
	@include text-preset(xlarge);
}

h2 {
	@include text-preset(large);
}

```

**CSS output**
```css
h2 {
	font-size: 24px;
	line-height: 36px;
	font-family: Verdana, Arial, non-serif;
}
```

### Specifications font-size
```scss
@include font-size(preset-name); 
```
- `(string)` **preset-name**:

> examples coming soon 

## CSS Classes
Text-preset CSS classes can be used after loading them into the project. This can be done by:

**SCSS input**
```scss
@include text-preset-classes();
``` 
**CSS output**
```css
.text-preset-your-custom-name {..}

.text-preset-xlarge {
	font-size: var(--xlarge-fs);
	line-height: var(--xlarge-lh);
	color: #000;
	font-weight: 500
}

.text-preset-large {..}
.text-preset-medium {..}
.text-preset-default {..}
.text-preset-small {..}
/* etc...*/
```

### Text-preset classes
**Classname format:** `.text-preset-[preset-name]`

**Classnames:** 
- `.text-preset-your-custom-name` 
- `.text-preset-xlarge` 
- `.text-preset-large` 
- `.text-preset-median`
- `.text-preset-default`
- `.text-preset-small`
- `.text-preset-tiny`

#### HTML input:
```html
<div class="align-baseline">
	<div class="text-preset-xlarge">xLarge</div> 
	<div class="text-preset-large">large</div> 
	<div class="text-preset-medium">medium</div> 
	<div class="text-preset-default">default</div> 
	<div class="text-preset-small">small</div> 
	<div class="text-preset-tiny">tiny</div>
</div>
```
#### HTML output:
<Typography-FontClasses-TextPreset/>

### Font-size classes
**Classname format:** `.font-size-[size]`

**Classnames:** 
 - `.font-size-your-custom-name` 
 - `.font-size-xlarge` 
 - `.font-size-large` 
 - `.font-size-median`
 - `.font-size-default`
 - `.font-size-small`
 - `.font-size-tiny`
 
In some situations you only want to output the **font-size** of a text-preset and not the **line-height** or **font-family**. In this case you can just use the `.font-size-[size]` class.


<Typography-FontClasses-FontSize/>


#### Initializing font-classes 
Use the `font-size-classes` mixin to output the classes when font-size classes are not generated

**SCSS input:** 
```scss
@include font-size-classes()`
````

