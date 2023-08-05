# About *"livecl"*

"**livecl**" is an experimental website for my learning purpose. I'm learning designs and JavaScript's `Date()` script through making this website and hopefully, this will get useful on my journey through this long journey on designs.

I learned how I can combine two fonts together to make something *eye-catching* and learned how to use JavaScript to receive time information and their timezone.

## Showcase

So, here's how I got these codes working. These codes should have been easy for you who have familiarity with JavaScript/HTML languages.

I have three HTML `id`s for the script to get it to work. One is `current-time` ID for updating the time, and `current-date` ID for updating the date. So, if we implement it into HTML, this is how they should look like:

```html
<div id="datetime">
    <h1 id="current-time"></h1>
    <p id="current-date"></p>
</div>
```

They're not yet doing anything... what's wrong? Alright, let's add a JavaScript script, that might work.

```html
<script src="js/main.js"></script>
```

We'll explain `updateTime` only, and you can learn all of the scripts if you're feeling lucky. You can add these into `main.js`. Let's go with the `updateTime()` function first.

```javascript
function updateTime() {
}
```

...then add something to get the `Date()` with

```javascript
function updateTime() {
    const now = new Date();
}
```

Then, define the `currentTime`! You can turn on the `hour12` if you want, but it will change into a 12-hour clock with AM/PM.

```javascript
const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
```

It's partly done! The next line is for getting the `current-time` ID for placing the actual time into the HTML.

```javascript
document.getElementById('current-time').textContent = `${currentTime}`;
```

And with that, we are done defining the `updateTime()` function! and this is how the code should look like:

```javascript
// Add this JavaScript snippet to your main.js file
function updateTime() {
    // Obtain the current time and date
    const now = new Date();
    // Format the current time to display
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    // Update the HTML with the current time
    document.getElementById('current-time').textContent = `${currentTime}`;
}
```

With these code snippets, the `updateTime()` function gets the current time, formats it appropriately, and updates the HTML element with the time.
