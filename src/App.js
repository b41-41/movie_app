import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
      <footer className="footer">&copy; 2021 B41</footer>
    </>
  )
}

export default App;