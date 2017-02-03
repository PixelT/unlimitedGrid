# unlimitedGrid

- **Documentation & examples**: [http://psdtohtml.ninja/unlimitedGrid/](http://psdtohtml.ninja/unlimitedGrid/)
- **Demo** (htmlpreview): [http://htmlpreview.github.io/?https://github.com/PixelT/unlimitedGrid/blob/master/demo.html](http://htmlpreview.github.io/?https://github.com/PixelT/unlimitedGrid/blob/master/demo.html)

## TL;DR

- unlimitedGrid is a very small / simple / flexible and functional grid "framework" (build with Sass)
- Just set the properties in the ug-grid.scss file, next build / compile this file
- Use the generated classes in your HTML to fast create your individual grid / layout structure!
-- or --
- Use build functions / mixins to create your own grid

## How start? ##

- **npm** - ```npm install unlimitedgrid```
- **bower** - ```bower install unlimitedgrid```
- **github (1)** - ```git clone https://github.com/PixelT/unlimitedGrid.git```
- **github (2)** - download the [latest release](https://github.com/PixelT/unlimitedGrid/releases/latest)

## Why use it? ##

- Ultra customizable, responsive, mobile first
- Module structure - use only what you need
- Small size - 12 columns grid with RWD only 2KB (5KB if use flexbox)
- Support 2 types of grid - gutter margin or padding
- Support CSS3 features: rem units, flexbox
- Generate full grid in 15-30s
- Set your custom: settings | modules | classnames | breakpoints
- Set your custom grid by using provided SCSS @mixin and @function

## About unlimitedGrid

The main reason that I wrote yet another grid system, was the fact that I can’t found any grid system, which would give me the possibility to create functional grid in short time…

unlimitedGrid is a collection of ~~functions~~ principles and rules, by which you can easily and fast create an attractive and ( ultra ) functional grid.

unlimitedGrid based on a slightly different approach and mechanism of action than standard grid frameworks offer. He doesn’t provide functions or mixins*, which define the rules / size / properties for classes which you write, but immediately generate a whole set of classes based on your settings. Just compile the mainly SCSS file (ug-grid.scss) and the grid will be ready for you!

unlimitedGrid is very flexible. It allows you to define multiple things, such as: the custom number of columns (10, 12, 16, 24 or maybe 7? no problem), custom size and type of gutters (in absolute or relative length units), custom class names (you prefer OOCSS, BEM or another methodology – easy), custom breakpoint values and class names for @media – for each module independently, according with your preferences – so you can generate the grid as you need – the only limitation is your imagination…

> *From version >= 2.0.0 the unlimitedGrid also provide the SCSS mixins and functions to build custom grid in another than described above way. Nay! The mixins & functions module, can be used alone, without the whole grid!

## Documentation / Examples

Full documentation, demo examples & codes and more other cool stuff you can find on the [unlimitedGrid documentation page](http://psdtohtml.ninja/unlimitedGrid/)

## Issues

If you find in project / doc page some bugs or have an idea for improvements / features, feel free to create an [issue](https://github.com/PixelT/unlimitedGrid/issues)
