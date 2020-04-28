# Boilerplate Frontend

My version of a simple, boilerplate frontend using TypeScript and React that can be organised however one likes.

To use, clone this repo to your computer, and use `npm install` to install the required packages.

## Commands

```bash
npm build
```

Build the website into /dist folder.

```bash
npm run watch
```

Watches files in the /src folder for changes, rebuilding the project into /dist whenever a change is saved.
I often use this with live-server (which can be installed using `npm i live-server -g`) in a different tab on the terminal, as a way to simulate a hot-reload development server and see changes instantly. It now appears that webpack-dev-server works properly with TypeScript finally though, so I'll probably start using that instead!

```bash
npm start
```

Creates a development server and hot-reloads changes you make on the fly, allowing you to see the changes you make to a webpage instantly. This will not build your project into /dist however, use `npm run build` or `npm run watch` to do that.

## HTML Webpack Plugin

This project does not seem to work well with the latest version of HTML Webpack Plugin (`v4.2.0`) using the `npm run watch` command, so I've kept this plugin at `v3.2.0`.
