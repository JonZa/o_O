**o_O(colour)**;
============

Marginally useful jQuery development plugin. Outlines a jQuery object, then returns the jQuery object for chainability

Visually answers the eternal question: _"Have I actually found the element that I think I've found?"_

**Ad-hoc outlining:**
```
$('#foo').o_O();
// #foo gets a semi-transparent pink outline
```
```
$('#foo').o_O('blue');
// #foo gets a semi-transparent blue outline
```
```
$('#foo').o_O('black').on('click', function() { ... })
// #foo gets a semi-transparent black outline, then binds the event
```
```