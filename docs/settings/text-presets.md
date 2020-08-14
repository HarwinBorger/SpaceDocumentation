# Text Presets
#### It can be hard to manage all different text-styles in your website. Text-presets help you with this. Centralizing all different text-styles at one place.


## What are text presets?
Text presets can be used to manage all different text styles in your website. This is done by centralizing them at one place. They are very strong for managing different `font-sizes` and `line-heights`.

## Why should I use it?
- Avoids writing double code
- Centralizing all text styles at one place
- Improve responsive typography 
- Higher CSS performance
- Less code writing


## Configuration

Adding a new text-preset is easy. Open the `1.settings/_text-presets.scss` file from your repository, or create a new file called: `_text-presets.scss`. 

### Example
Add or edit the text-presets using the following format:
```scss{2-8}
$text-presets: (
	your-custom-name:( // Your custom text-preset
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

- `(array)` **font-size:** ($value, $value, $value, etc)

> Add a font-size value for each viewport  (small, medium, large). You can find your viewports in `1.settings/viewports.scss`.
  
- `(array)` **line-height:** ($value, $value, $value, etc)

> Add a line-height value for each viewport  (small, medium, large). You need to use [space-units](base-principles/space-unit-grid.md) here in order to align with the [Space-Unit grid](base-principles/space-unit-grid.md)  and to use [Vertical Alignment Classes](/typography/vertical-alignments)

- `(string)` **font:** (optional) 

> Use a font from the list in [fonts](fonts.md). When not given up the *default* will be used. 
Fill in for example: `default` or `secondary`

<Badge text="1.1+"/>
- `(string|variable)` **color:** (optional)
- `(string|variable)` **font-weight:** (optional)
