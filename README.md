# Learning CSS Position

## display: inline;

Will put elements side by side, but when you're using it, the width and height properties will not work.

That happens because when you put this property in an element, it gets a word pattern.
You will see some spaces on screen, magically.

These spaces are because of the line break. If you comment that or join the divs, it'll work. But is that all right?

So, with that property, we can't organize elements side by side, with width and height as we want.

## display: block;

It's used for elements that fill the entire row.

If we put a `margin-left: auto`, that div will move to right;