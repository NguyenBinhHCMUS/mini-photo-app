import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';


// Lazy load - Code spliting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          {/* TODO: Remove after testing
          <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to Add new photo page</Link></li>
            <li><Link to="/photos/edit">Go to Edit photo page</Link></li>
          </ul> */}

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            {/* <Route path="/user" component={User} /> */}
            <Route component={NotFound} />

          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
