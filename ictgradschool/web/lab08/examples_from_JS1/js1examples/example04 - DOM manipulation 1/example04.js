"use strict";

// This file contains SOME examples of how we can get various HTML elements using JavaScript, and how we can modify them
// by changing their style, their content, or even adding new CSS classes to them.

// This is but a small taste of what you can do to modify HTML elements. For more, I recommend looking at the
// HTML DOM pages in the W3Schools JavaScript tutorials (https://www.w3schools.com/js/js_htmldom.asp), and / or
// Chapter 9 of the recommended reading.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function changeBox() {
    alert("Alert message...");
    console.log("Console message....");
    // getElementById() will get the single HTML element with the given name. This one will get the #box element.
    var box = document.getElementById("box");

    var r = getRndInteger(0, 255);
    var g = getRndInteger(0, 255);
    var b = getRndInteger(0, 255);

    // We can change CSS properties through an element's "style" property.
    // Code completion in VS Code can help you see which style properties there are.
    console.log("Old background-color: " + box.style.backgroundColor); // Logging the old value

    document.getElementById("box").style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"; // Changing the value

}

function changePs() {

    // getElementsByTagName will return an array of all elements of that type.
    // This one will get all <p> elements.
    var paragraphs = document.getElementsByTagName("p");

    // We can loop through that array just like any other JS array.
    for(var i = 0; i < paragraphs.length; i++) {

        // Getting one of the paragraphs.
        var p = paragraphs[i];

        // The innerHTML property contains all the text (including any tags) inside the element.
        console.log("Old content: " + p.innerHTML); // Accessing content
        p.innerHTML = "Changed content. Index: " + i; // Changing content

    }

}

function changeMyClass() {

    // getElementsByClassName will return an array of all elements of that class.
    // This one will get all .myclass elements.
    var elements = document.getElementsByClassName("myclass");

    for(var i = 0; i < elements.length; i++) {

        // Getting one of the elements
        var elem = elements[i];

        var size = getRndInteger(80, 200);
        elem.style.fontSize = size + "%";

        var r = getRndInteger(0, 255);
        var g = getRndInteger(0, 255);
        var b = getRndInteger(0, 255);
        elem.style.color = "rgb(" + r + ", " + g + ", " + b + ")";

    }
}

function animateBox2() {

    // getElementsByClassName will return an array of all elements of that class.
    // This one will get all .box2 elements. Since we know there's only one, we're
    // just grabbing the "first" one using array index [0].
    var box = document.getElementsByClassName("box2")[0];
    box.classList.add("coolAnimatedClass");
    // We can add or remove CSS classes from elements. Here, we'll add the .coolAnimatedClass class,
    // which will cause the box to start animating, as defined in that CSS rule.

}

function changeChildren() {

    // We can use CSS selectors with the querySelectorAll() method.
    // NOTE: This is only supported on relatively recent browsers.
    var spans = document.querySelectorAll("#parent span");
    
    for (var i = 0; i < spans.length; i++) {

        var span = spans[i];

        var r = getRndInteger(0, 255);
        var g = getRndInteger(0, 255);
        var b = getRndInteger(0, 255);
        span.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
        span.style.fontSize = "150%";
        span.style.fontFamily = "cursive";

    }

}