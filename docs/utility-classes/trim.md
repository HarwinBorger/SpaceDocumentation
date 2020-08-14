# Trim

You can use the *trim* class to remove the margins of the first- and last-child element

## Introduction

### What is Trim? 
By applying the Trim class on a container with components or content you can easely remove unwanted white space created by margins. This way you can always add vertical margins to every CSS component, which is need to build modular webpages. 

### Benefits of using Trim
- Maximum control of white space in webpages 
- When using modular CSS components you can always add vertical margins, no longer you need to worry about unwanted white space. 
- Easy way to remove unwanted margins 
- Less code writing

## Example

#### Before using .trim
<Utility-Trim-Trim-Before content="3 space-unit margin on top and bottom"/>
#### After using .trim
<Utility-Trim-Trim-After content="3 space-unit margin on top and bottom"/>


## Specifications
### Trim
**Classname:** `.trim`

- **First child:** Removes the `margin-top` of the `> *:first-child` 
- **Last child:** Removes the `margin-bottom` of the `> *:last-child`


### Trim top
**Classname:** `.trim-top`

- **First child:** Removes the `margin-top` of the `> *:first-child` 

### Trim bottom
**Classname:** `.trim-bottom`

- **Last child:** Removes the `margin-bottom` of the `> *:last-child`

## How to use
#### HTML input
```html
<div class="trim">
	<div class="element-with-vertical-margin">3 space-unit margin on top and bottom</div>
	<div class="element-with-vertical-margin">3 space-unit margin on top and bottom</div>
</div>

```
#### HTML output
<Utility-Trim-Trim-After content="3 space-unit margin on top and bottom"/>