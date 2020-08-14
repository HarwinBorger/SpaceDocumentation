# Font Presets
In font presets you can configurate all the different font families you use.  

## What are font-presets?
Font-presets can be used to manage all different font families in your website. They can be provided with advanced configurations to give you the opportunity to use typography alignment techniques such as baseline and cap alignment. 

## Benefits of using font-presets
- Font families centralized at one place
- Configuration of advanced settings such as x-height and capheight to prepare the font for baseline alignment  

## Configuration
```scss
$fonts: (
	default: (
		family: $body-font-family,
		cap-height: .73,
		x-height: .51
	),
	secondary: (
		//...
	)
);
```

- `(float)` **x-height**

> The *x-height* should be based on the main font in the font-family. The x-height of Google Fonts can be calculated on [https://fonts.spaceframework.dev/](https://fonts.spaceframework.dev/)
 
- `(float)` **cap-height**
> The *capheight* should be based on the main font in the font-family. The cap-height of Google Fonts can be calculated on [https://fonts.spaceframework.dev/](https://fonts.spaceframework.dev/)
