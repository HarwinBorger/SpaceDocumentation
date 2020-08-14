# Implode

At which .trim removes margins from the first- and last-child does .implode remove everything in between. 


## Introduction

### What is Implode? 
By applying the Implode class on a container with components or content you can easily remove unwanted white space between the elements. 

Sometimes this comes in handy when you want for example remove the white space between an `<h3>` and a `<p>` element in a small teaser. No longer you need to remove this manually on a component base.  

### Benefits of using Implode
- Less code writing
- Maximum control of white space in webpages 
- Easy way to remove unwanted margins between elements


## Example

#### Before using .implode
<Utility-Implode-Implode-Before content="3 space-unit margin on top and bottom"/>

#### After using .implode
<Utility-Implode-Implode-After content="3 space-unit margin on top and bottom"/>


## Specifications
### Implode
**Classname:** `.implode`
- *Not first-child:* Removes all `margin-top` from child elements except the `> *:first-child`
- *Not last-child:* Removes all `margin-bottom` from child elements except the `> *:last-child`

## How to use
#### HTML input
```html
<div class="implode">
	<div class="element-with-vertical-margin">3 space-unit margin on top and bottom</div>
	<div class="element-with-vertical-margin">3 space-unit margin on top and bottom</div>
	<div class="element-with-vertical-margin">3 space-unit margin on top and bottom</div>
</div>

```
#### HTML output
<Utility-Implode-Implode-After content="3 space-unit margin on top and bottom"/>
