# per-word-action
A jQuery plugin utility which idempotently wraps every word within an element in
a unique span and assigns each word a line-number data attribute.
Takes a per-word callback function as an argument.

**Demo:** https://jakedowns.github.io/per-word-action/

## usage
See index.html for an example.

1. make sure you have jQuery loaded
2. require this plugin or load it via a script tag
3. call it via:
```
$('#my-element-selector').perWordAction(function($word, line_number){
    // do something per-word here on the $word jQuery object
    // or per-line-number here thanks to line_number <1-based integer>

    // NOTE you can also reference
    // Words via $('.pwa-word') class selector
    // Lines via $('[pwa-line=N]') data-attribute
});
```
---
Note:
If your elements contents change and you need to re-wrap,
make sure to call this first:

`$('#my-element-selector').attr('data-pwa','');`

## related
- ellipsizer
- pull-quote-center

## credit
props to Yoshi on stackoverflow: http://stackoverflow.com/a/12105430/1712225