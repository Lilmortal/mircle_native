TODO:

Most of the colors are hard coded, need to use colorPalette.js on src/config in the future.
As of now, to access @jacktan/mircle_native_components, you will need to install Verdaccio, clone that project and publish it locally. I might deploy that package in a remote server in the future if I can figure out how.

Websockets! Adding websockets on a redux global store does not seem to work! I will add more on what I meant by that later. It only works if I initialized it on componentWillMount... but I don't want to do that for every single pages.
