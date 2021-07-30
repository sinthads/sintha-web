import { About, Contacts, Main, NotFound, Projects } from "./pages";
import { Navbar, Menu } from "./components";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="App">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contacts} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
