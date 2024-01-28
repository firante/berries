import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import GoodList from './GoodList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GoodDetails from './GoodDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-body">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="/home" element={<GoodList />} />
                <Route path="/details/:id" element={<GoodDetails />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
