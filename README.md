# Gulp PostCSS Dependency Tracking Issue

This project includes a very basic inline PostCSS plugin that rewrites a CSS class to always contain the current timestamp in the `content` property.

It registers `dependency.txt` as a dependency, and therefore the CSS should be rebuilt any time `dependency.txt` changes.

Gulp seems to ignore this dependency, and does not rebuild when the file changes, even though it is registered as a dependency by the plugin.

You can demonstrate this by running `npm run dev` and making changes to `dependency.txt`, and seeing the timestamp in `dest/styles.css` remain unchanged.

In contrast, if you run `npm run build:postcss`, I am building the same CSS file using postcss-cli, and changes to `dependency.txt` always cause the CSS to be rebuilt, which you can observe by looking at the contents of `out.css`.
