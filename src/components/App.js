import React from 'react';
import '../styles/App.scss';
import Header from './Header';
import GoodList from './GoodList';
import Footer from './Footer';

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
              <Route index element={<GoodList />} />
              <Route path="/home" element={<GoodList />} />
              <Route path="/details/:id" element={<GoodDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
