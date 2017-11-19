# Isomorphic React Template with React Router

This template uses the [isomorphic-webpack](https://github.com/gajus/isomorphic-webpack) express middlewhere to autocompile and render the html on the server.

## Usage

* CSS is loaded into `/static`
* Base HTML is in the render function of renderFullPage function of `/server.js`
* [react-helmet](https://github.com/nfl/react-helmet) is used to update `<head>` contents on client and server
* Add routes in `/src/routes.js`
