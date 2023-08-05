        # About _"livecl"_
        "_livecl_" is an experimental website for my learning purpose. I'm learning designs and JavaScript's `Date()` script through making this website and hopefully this will get useful on my journey through this long journey on designs.
        
        I learned how I can combine two fonts together to make something _eye-catching_ and learned how to use JavaScript for receiving time information and their timezone.
        
        <br><br>
        
        # Showcase
        So, here's how I got these codes working. These codes should have been easy for you who have familiar with Javascript/HTML languages.
        
        I have three HTML `id`s for the script to get it work. One is `current-time` ID for updating the time, and `current-date` ID for updating the date. So, if we implement it into HTML, this is how they should look like:
        
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
        
        Then, define the `currentTime`! You can turn on the `hour12` if you want, but it will change into a 12-hour clock with AM/PM thingy.
        
        ```javascript
        const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
        ```
        
        It's partly done! The next line is for getting the `current-time` ID for placing the actual time into the HTML.
        
        ```javascript
        document.getElementById('current-time').textContent = `${currentTime}`;
        ```
        
        And with that, we are done defining the `updateTime()` function!
