import logo from './dispensary.svg';
import './App.css';

import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Fade from 'react-bootstrap/Fade';

// function Example() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-fade-text"
//         aria-expanded={open}
//       >
//         Toggle text
//       </Button>
//       <Fade in={open}>
//         <div id="example-fade-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Fade>
//     </>
//   );
// }

// render(<Example />);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} class="weed" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
