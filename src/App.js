import { Route, Switch, Redirect } from "react-router";
import Home from "./views/Home";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </>
  );
}

export default App;
