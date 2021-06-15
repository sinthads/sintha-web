import { About, Contacts, Main, Projects } from "./pages";
import { Navbar, Footer } from "./components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contacts} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
