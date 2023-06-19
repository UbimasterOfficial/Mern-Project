import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRoute from './Components/RouteInfo/AddRoute';
import Header01 from './Components/HeaderInfo/Header01';
import Delete1 from './Components/DeleteInfo/Delete1';
import ViewInfo from './Components/ViewInfo/ViewInfo';
import EditOne from './Components/EditInfo/EditOne';
import ViewOne from './Components/SpecRoute/ViewOne';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header01 />

          <Routes>
            <Route path="/" exact element={<ViewInfo />} />
            <Route path="/add" element={<AddRoute />} />
            <Route path="/delete/:id" element={<Delete1 />} />
            <Route path="/edit/:id" element={<EditOne />} />
            <Route path="/spec/:id" element={<ViewOne />} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}
