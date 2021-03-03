# Learning CSS Position

## display: inline;

Will put elements side by side, but when you're using it, the width and height properties will not work.

That happens because when you put this property in an element, it gets a word pattern.
You will see some spaces on screen, magically.

These spaces are because of the line break. If you comment that or join the divs, it'll work. But is that all right?

So, with that property, we can't organize elements side by side, with width and height as we want.

### Reviews
- [x] One day after
- [ ] Three days after
- [ ] One weeak after
- [ ] One month after
- [ ] Two months after
- [ ] Three months after

## display: block;

It's used for elements that fill the entire row.

If we put a `margin-left: auto`, that div will move to right;

### Reviews
- [x] One day after
- [ ] Three days after
- [ ] One weeak after
- [ ] One month after
- [ ] Two months after
- [ ] Three months after

## display: inline-block;

Will put elements side by side without remove `display: block` behavior. That way you can put height and width on element.

But don't forget, this element still has a word behavior too. So you can align the elements by putting a `text-align: center;` in a father element.

If we can use `text-align` property, we could use `justify` to center elements in a line. So it's important to know that `justify` does not justify the last line. You might need to use an __after__ selector, to create the last line, and align your elements.

### Reviews
- [ ] One day after
- [ ] Three days after
- [ ] One weeak after
- [ ] One month after
- [ ] Two months after
- [ ] Three months after
