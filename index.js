"use strict";
function greet(name) {
    return name.toUpperCase();
}
function runTwice(action) {
    action("Hello");
    action("World");
}
runTwice((msg) => console.log(greet(msg)));
