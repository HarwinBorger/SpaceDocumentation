# Viewports

From **1.settings/_viewports.scss**

## Setting up viewports
Define each viewport you want to support for the SpaceFramework
```scss
$viewports: (
	small: 0,
	medium: 640px,
	large: 1024px,
);
```

Define on which viewports you want to generate your classes (layout and typography classes)
```scss 
$viewport-classes: (
	small, medium, large
);
```

## Toggle Zurb Foundation support
The Spaceframeworks loves the Zurb Foundation framework. If you want the SpaceFramework to use your viewport settings from Zurb Foundation. Then just add the variable beneath.
```scss
$support-zurb-foundation-breakpoints: true; // false by default
```

> We will add more documentation soon