**Basic project structure with configured webpack, less, and babel**

To use: download, unzip, and run the following commands in your terminal (command line):

1. `npm install`
2. `npm start` — this command starts the dev server, required for automatic compilation of less/ES6 files
3. Open your browser and go to **http://localhost:8080**
4. To stop the dev server, press **Ctrl+C twice** in the console/terminal

If compilation errors occur, you'll see red error messages in the terminal. The beginning of each message describes what went wrong fairly accurately — pay attention to that. Also, if you have build issues, please attach a screenshot of the console error text to your question.


**File structure**

`assets` — directory for storing assets (fonts, images). See usage example in `common/styles/header.less`

```
src
.
|
├── index — the index.html page and everything related to it
|   |
|   +-- scripts   — scripts; must be imported into index.js
|   +-- styles    — all styles split into separate files; must also be imported into index.less
|   +-- index.html — main HTML document, your site's home page
|   +-- index.js   — main JS file; all scripts related to this page are imported here (from the scripts directory)
|   +-- index.less — main styles file
+-- common — directory storing shared files used across all pages of your site
    |       (e.g. shared styles and scripts); import them in each page's main files — see index/index.less
    |
    +-- scripts
    |
    +-- styles
```


**Adding a new page**

If you need to add a new page, create a directory named after your page. The HTML, JS, and LESS files inside must share the same name as the directory — see `src/about` for an example.

After creating the directory, you need to register the new page in the webpack build. Open `config/base.js` and add a new line to `entry`. For example, if your folder is named `test`, the line would be:

```
test: ['babel-polyfill', './src/test/test.js']
```

The final `entry` object should look like this:

```javascript
const entry = {
    index: ['babel-polyfill', './src/index/index.js'],
    about: ['babel-polyfill', './src/about/about.js'],
    test:  ['babel-polyfill', './src/test/test.js']
};
```

To navigate to pages other than index, append `/page-name.html` to `http://localhost:8080` in the address bar — for example: **http://localhost:8080/about.html**
