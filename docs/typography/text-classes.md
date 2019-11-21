# Text Classes
#### Text Classes are generated from the text-presets

By default the SpaceFramework generates a set of pre-made classes for you. You can change and add more text Preset as you need them. [Learn how to configurate your own text-presets](settings/text-presets).

**Table of content**

- [Text-preset classes](#text-preset-classes)
- [Font-size classes](#font-size-classes)
- [Custom classes](#custom-classes)


## Text-preset classes
**Classname format:** `.text-preset-[size]`

**Classnames:** 
- `.text-preset-xlarge` 
- `.text-preset-large` 
- `.text-preset-median`
- `.text-preset-default`
- `.text-preset-small`
- `.text-preset-tiny`

In most situations it's best to use the **text-preset** class. By using the text-preset also the **line-height** and **font-family** are set. Also you can make use of the vertical alignment classes such as `.align-baseline`.

**Mixin:** `@include text-preset-classes()`

Use the mixin to output the classes when text-preset classes are not generated

<Typography-FontClasses-TextPreset/>

## Font-size classes
**Classname format:** `.font-size-[size]`

**Classnames:** 
 - `.font-size-xlarge` 
 - `.font-size-large` 
 - `.font-size-median`
 - `.font-size-default`
 - `.font-size-small`
 - `.font-size-tiny`
 
In some situations you only want to output the **font-size** of a text-preset and not the **line-height** or **font-family**. In this case you can just use the `.font-size-[size]` class. If you want the full text-preset then you should use `.text-preset-[size]` instead.   

<Typography-FontClasses-FontSize/>


**Mixin:** `@include font-size-classes()`

Use the mixin to output the classes when font-size classes are not generated


## Custom classes
You can change the text-presets to your needs. Which we explain in the [text-preset](settings/text-presets) article.

Lets say you added a `xx-large` font. Then the following classes would be generated:

**Classnames:** 
 - `.text-preset-xxlarge`
 - `.font-size-xxlarge`

 
 Or when you added a special text Preset for your `hero` font: 
 
 **Classnames:** 
 - `.text-preset-hero`
 - `.font-size-hero`
 
