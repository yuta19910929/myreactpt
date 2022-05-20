import React from 'react';
import { Routes, Route, } from "react-router-dom";
import { TopContent, About, Skill, Contact, Error } from './components/index';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Router = () => {
  return (
      <Routes>
          <Route index element={<TopContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
      </Routes>
  );
}

export default Router;