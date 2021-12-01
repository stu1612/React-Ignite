import Home from "./pages/Home";
import { Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};
