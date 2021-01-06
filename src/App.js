import React from 'React';

import Header from './components/Header';

function App() {
    return (
        <>
          <Header title="Homepages">
              <ul>
                  <li>Homepages</li>
                  <li>Projects</li>
              </ul>
          </Header>
          <Header title="Projects">
              <ul>
                  <li>Homepages</li>
                  <li>Projects</li>
                  <li>Login</li>
              </ul>
          </Header>
        </>
    );
}

export default App;