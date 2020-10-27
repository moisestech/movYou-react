import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage";
import RecommendedVideos from "./components/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app-page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
