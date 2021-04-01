# Parcel 2 PostCSS Dependency Tracking Issue

This project includes a very basic inline PostCSS plugin that rewrites a CSS class to always contain the current timestamp in the `content` property.

It registers `dependency.txt` as a dependency, and therefore the CSS should be rebuilt any time `dependency.txt` changes.

Parcel 2 seems to acknowledge this dependency at first, and will continue to rebuild the CSS file any time this file **changes**. However, as soon as you hit "save" in that file _without making any changes_ (so the file is just re-saved with the existing contents), any future changes are ignored until restarting Parcel.

You can demonstrate this by running `npm run dev` and making changes to `dependency.txt`, and seeing the timestamp displayed in the browser in `index.html` changes. Then, hit save in `dependency.txt` without making any changes and notice that the timestamp is not updated. Any future changes at this point will be ignored as well.

In contrast, if you run `npm run dev:postcss`, I am building the same CSS file using postcss-cli, and changes to `dependency.txt` always cause the CSS to be rebuilt, which you can observe by looking at the contents of `out.css`.