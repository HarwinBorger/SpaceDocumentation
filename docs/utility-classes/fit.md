# Fit
Fit removes white space from the line-height so it fit's perfectly to it's container. 

::: warning Please notice:
Currently this only works combined with `.align-baseline` and `.align-capline` classes. The standalone .fit class has yet to come. 
:::

## Introduction

### Benefits of using .fit class
- No longer you need to give your padding strange values to compensate for line-heights. 

## Example
#### Before .align-baseline and .fit
<Utility-Fit-Fit-Before />

#### After .align-baseline and .fit
<Utility-Fit-Fit-After />

## Requirements
- Use of text-presets classes or mixins is required in order to have the Fit class work

## Specifications
**Classname:** `.fit`

## How to use
#### HTML input:
```html
<div class="align-baseline fit">
	<div class="text-preset-xlarge">xLarge</div>
	<div class="text-preset-default">Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere
		consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis
		euismod.
	</div>
</div>
```

#### HTML output:
<Utility-Fit-Fit-After />

> We will add documentation soon
