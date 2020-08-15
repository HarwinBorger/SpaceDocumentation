# Space Units
#### The measurement system of the Space Framework is build with space units. This system of space units is one of the core elements of the framework

By adjusting the space-unit size for a certain viewport  you can up- and downscale the spacing of all elements within the website.

## What are Space Units
Space Units are a virtual units used to maintain all proportions in the website. It matches grids lines used in software like: Sketch, Photoshop and Figma. By using space units you can match the grid lines used in graphic designs.

<SpaceUnits-Introduction-SpaceUnits />

 
 ## What are the benefits of Space Units
 Both Graphic Designer and Front-end Developer can talk in the same language according to the different proportions used in the design. This advantage is huge, no longer does the front-end developer need to calculate all the different pixels to match a design: all you need to do is count the amount of grid-lines and apply them. 
 
 ### More benefits are:
 - Adjust grid-lines for each viewport: up- and downscale all dimensions in the website just with 1 variable. 
 - Possible to make use of baseline, capline and median alignments. 
 - Separated typography and layout dimensions. They don't need to up- and downscale together any longer. 

## Configuration

```scss
$space-unit-sizes: (
    small: .75rem,
    medium: .875rem,
    large: 1rem
);
```

## How to use
Since *space-units* are a measurement unit you can use them in line-heights, paddings, margins, positions, widths, heights etc. In the SpaceFramework this is done through Layout-presets, Text-presets, SCSS mixins and CSS classes. 