import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/Main';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <div>
      <Main />
    </div>
    
  )
}

ReactDom.render(<App />, mainElement);