# Parcel 2 PostCSS Dependency Tracking Issue

This project includes a very basic inline PostCSS plugin that rewrites a CSS class to always contain the current timestamp in the `content` property.

It registers `dependency.txt` as a dependency, and therefore the CSS should be rebuilt any time `dependency.txt` changes.

Parcel 2 does not seem to acknowledge this dependency, and changes to this file are ignored, so the CSS file is never rebuilt.

You can demonstrate this by running `npm run dev` and making changes to `dependency.txt`, and seeing the timestamp displayed in the browser in `index.html` never changes.

In contrast, if you run `npm run dev:postcss`, I am building the same CSS file using postcss-cli, and changes to `dependency.txt` do cause the CSS to be rebuilt, which you can observe by looking at the contents of `out.css`.