# Comparison

A deeper comparison between a selected few libraries for styling react applications and component libraries.

## Scope

Our goal here is to make the same component using various frameworks to compare features and implementations. While the component is small, we built in certain constraints you might have in a real world app (e.g. `dangerouslySetInnerHTML`) to help compare the libraries. We do a deeper dive with a selected number of frameworks to see how they scale and where the boundaries are.

This repo is set up so all common code is shared – inside the examples themselves, you'll _only see what's different_ to the other methods. That's true even for the build process and dependencies, you'll only see the changes you need to make to the build process and the dependencies you need to add for a certain method, not all of it.

## Examples

You can start an example by running `npm install` in the `examples/` folder (only have to do that once), then running `npm install` inside the folder of the example you want to run and then running `npm start`.

Here are quick links to all the existing examples: (or just check out the `examples/` folder)

- [Vanilla CSS](./examples/css)
- [Aphrodite](./examples/aphrodite)
- [CSS Modules](./examples/css-modules)
- [JSS](./examples/jss)
- [Radium](./examples/radium)
- [`styled-components`](./examples/styled-components)

We have issues open for the frameworks we're planning on implementing; if you think there's a strong case for adding one that's not on our list please open an issue to let us know!

*For a complete reference with less deep-div of all the available frameworks see [MicheleBertoli/css-in-js](https://github.com/MicheleBertoli/css-in-js)*

## License

Licensed under the MIT license, copyright (c) 2016-present Maximilian Stoiber, Jed Watson and Joss Mackison
