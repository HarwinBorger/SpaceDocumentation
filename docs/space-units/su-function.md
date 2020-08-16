# SU() <Badge text="1.0+"/> <Badge text="modern browser only" type="warning"/> 
With the `su()` function you can add space units anywhere you like. The function is intented to replace most of the SpaceFramework mixins to use 'space units', this way you can write more vanilla SCSS code. 

> This function should only be used in modern browser. This because it is making use of CSS variables. Go to [https://caniuse.com/#feat=css-variables](https://caniuse.com/#feat=css-variables) to see which browsers are supported. 

### Example 1:
```scss
	padding-top: su(5);
```

### Example 2:
also instead of using:
```scss
	@include margin-left(2);
```

you can now use:
```scss
	margin-left: su(2);
```