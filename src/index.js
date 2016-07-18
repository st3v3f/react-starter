
/* http://patternhatch.com/2016/07/06/a-primer-on-the-react-ecosystem-part-1-of-3/*/

/*const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

greeting('world');
*/



import React from "react";
import ReactDOM from "react-dom";
import Greeting from './greeting';

ReactDOM.render(
  <Greeting name="World2 Steve"/>,
  document.getElementById('container')
);
