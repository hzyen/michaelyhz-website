import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/header.component';
//import Footer from './component/footer/footer.component';

import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Project from './pages/project/project.component';
import Album from './pages/album/album.component';
import Contact from './pages/contact/contact.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Project} />
          <Route path='/album' component={Album} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
