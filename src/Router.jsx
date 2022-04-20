import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopContent, About, Skill, Contact, Error } from './components/index';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TopContent />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skill">
            <Skill />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
	);
}

export default Router;
