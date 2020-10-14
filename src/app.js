import React from 'react';

import { Sidebar } from './sidebar';
import { Header } from './header';
import { Records } from './records';

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
