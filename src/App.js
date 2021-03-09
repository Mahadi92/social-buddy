import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import Comments from './components/Comments/Comments';
function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/posts">
          <Home></Home>
        </Route>

        <Route path="/post/:id">
          <Comments></Comments>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
