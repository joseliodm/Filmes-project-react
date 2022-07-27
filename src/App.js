import Navbar from './Nav';
import Home from './Home';
import About from './About';
import Update from './Update';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog/:id" component={BlogDetails} />
        <Route path="/create" component={Create} />
        <Route path="/update/:id" component={Update} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
