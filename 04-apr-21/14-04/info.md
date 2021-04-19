# SASS (Syntactically Awesome Style Sheet)

..........................................

## npm install (-y)

in Terminal
creates package.json file

---

## npm install -- save-dev

live-server
sass
gh-pages
npm-run-all

---

##### short:

npm install -- save-dev live-server sass gh-pages npm-run-all

---

## .gitignore

create a _.gitignore_ file > node_modules (actual folder turns grey)

---

## scripts

insert in the package.json file the following scripts:

"start": "run-p watch watch:styles",
"build": "run-s clean clean:styles build:styles copy",
"deploy": "run-s build publish",
"build:styles": "sass src/scss:src/styles",
"watch": "live-server src",
"watch:styles": "sass src/scss:src/styles --watch",
"clean": "rm -rf dist",
"clean:styles": "rm -rf src/styles",
"copy": "mkdir dist && rsync -avr --exclude=\"/scss\" src/ dist",
"publish": "gh-pages -d dist"

---

## src folder

create a new folder **src** with index.html file
in the **src** folder create a new folder _scss_ with main.scss file

---

## npm start

in Terminal
opens live-server and creates a new folder called _styles_ in the **src** folder with the files main.css and main.css.map
-> link the _main.css_ to the index.html file

---

## npm run build

in new Terminal
creates new folder called **dist** with includes the folder styles && the file index.html
(this is for clients)
