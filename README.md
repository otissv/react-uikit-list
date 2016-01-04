#React UIkit List

Dynamicly create lists.

npm install react-uikit-list --save;

// ES6  
import List from 'react-uikit-list';  
import Listitem from 'react-uikit-list/lib/ListItem';

// ES5  
var List = require('react-uikit-list');  
var Listitem = require('react-uikit-list/lib/ListItem');


###Example
    <List items={['item', 'item', 'item']} />

    <List type='description' horizontal>
      <dt>Description lists</dt>
      <dd>A description list defines terms and their corresponding descriptions.</dd>
      <dt>Lorem ipsum</dt>
      <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
      <dt>A long term is truncated</dt>
      <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
    </List>


##Tests

`npm run test`to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.

##Build
`npm run build` to build files fro distribution.  
`npm run build:watch` watches src directory and builds files on changes.

##Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.

##License
MIT
