import React from 'react';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { Records } from './record';

function App() {
  return (
    <div id="App">
        <Sidebar />
        <Header />
        <div id="body">
            <Records />
        </div>
    </div>
  );
}

export default App;
