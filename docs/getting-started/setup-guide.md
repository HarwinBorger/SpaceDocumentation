# Setup guide
There are several ways to include the SpaceFramework in your SASS/SCSS project.
 
 [[toc]]
 

## Quick setup
This method does output all classes and code from the SpaceFramework.

1. Include the `spaceframework.scss` file from your package directory at the start of your project by using:
	```scss
	@import '{your-location}/scss/spaceframework.scss';
	```
2. Done. 

## Advanced setup 
> Recommended when you use ITCSS or SMACSS

This method does not output any classes or code by default. We recommend this method when you have project based on ITCSS or SMACSS. You can decide where you want to output the code for classes and elements. 

1. Include the `init-spaceframework.scss` file from your package directory at the start of your project by using:

	**Import from `node_modules` using tilde operator (`~`)**
	```scss
	@import '~spaceframework/scss/init-spaceframework.scss';
	```
	**or**
	```scss
	@import '{package-directory}/spaceframework/scss/init-spaceframework.scss';
	```

2. Read our instructions in [ITCSS](itcss) how to generate css classes for your project.
3. Done
 