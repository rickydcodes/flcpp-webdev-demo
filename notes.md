# HTML/CSS/JS Demo
This is the commentary from our short HTML/CSS/JS demo on 10-28-26. We'll use this to create our own portfolio sites to showcase things we've built or places we've worked.

## HTML
HTML stands for Hyper Text Markup Language, and is used to make the structure of websites such as text, buttons, and images.
It's composed of tags, which are blocks of code that create elements on your page.

### Tags
Tags are made with <> around the tagName, for instance:
```
<button>
```
If you write that in most editors, it will auto-complete the closing tag, which tells the browser where the tag ends. It looks like this:
```
<button></button>
```
Notice it looks the same as the opening tag, except that it has the forward slash (/)

Example of some HTML tags that make common elements:
```
<button>Click Me</button>
<p>This is a paragraph.</p>
<h1>Website Title Heading</h1>
<h2>Website Sub Heading</h2>
```

The vast majority of HTML tags have closing tags, but some do not, such as the img tag (image):
```
<img src="fileName.png">
```

Also note that before the closing right angle bracket (>), there is an attribute called src (source), which tells the browser what image to show in the element.

HTML elements can have other attributes too, like IDs and classes.
### IDs
IDs are unique identifiers that differentiate one element from another. Every element can only have one ID. Example:
```
<button id="myButton">Click me</button>
```

### Classes
Classes, on the other hand, can be added to multiple elements. They're used to group related elements together, or apply a set of styles to elements (which you will learn in the next section).
```
<button class="green-btn">Click me</button>
```

## CSS
CSS stands for Cascading Style Sheets, and is used to style websites.
CSS is composed of **Selectors** and **Styles**. Selectors are used to select elements in HTML and styles are the attributes of those elements you want to modify. An example of styles are colors, fonts, positioning, and sizing.
### Selectors
There are three main ways to select HTML elements:
1. By tag name, like this:
```
button {

}
```

2. By ID, (adding # before the ID):
```
#myButton {

}
```

3. By class, (adding . before the class name):
```
.green {

}
```
### Styles
The most common styles are
* width: value;
* height: value;
* color: value;
* background-color: value;
* font-size: value;
* font-family: value;
* margin: value;
* padding: value;

## JavaScript
JavaScript is a programming language that runs in the browser and powers the modern web. There aren't really other alternatives for building the frontend (user facing portion) of a web app other than web assembly.

There are two ways to store data for later: constants, and variables.
Constant:
```
const example = value
// cannot be reassigned a value later
```

Variable:
```
let example = value
// can be reassigned a value later
```

You can get elements from your HTML and store them in constants/variables by using querySelector or querySelectorAll, which are methods for querying elements using the CSS selector format (#id, .className, tagName, etc.)

For instance, to select a button by ID, write:
```
const myButton = document.querySelector("#myButton")
```

To make the button call a function when it gets clicked, you use an "event listener", which is something that listens for an event and triggers a function when the event happens.
```
const myButton = document.querySelector("#myButton")
myButton.addEventListener("click", functionName)
```

Then, you need to create a function, which is a block of code that performs some action.
```
function functionName() {
  console.log("Hello, world!")
}
```