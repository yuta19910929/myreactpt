import React from 'react';
import { Routes, Route, } from "react-router-dom";
import { TopContent, About, Skill, Contact, Error } from './components/index';

const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<TopContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
      </Routes>
  );
}

export default Router;