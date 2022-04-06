import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TopContent, About, Skill, Career, Contact, Error } from './components/index';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<TopContent />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
	);
}

export default Router;
