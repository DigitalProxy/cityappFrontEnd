import './App.css';
import './Styling.css';
import { Router } from "@reach/router";
import LoginPage from "./components/LoginPage";
import FeedPage from "./components/FeedPage";
import PostPage from "./components/PostPage";
import ScreenSaverPage from "./components/screensaverpage/ScreenSaverPage";

function App() {
  
  return (
    <div className="App">
    <Router>
      <LoginPage path="/"/>
      <FeedPage path="/feed"/>
      <PostPage path="/post"/>
      <ScreenSaverPage path="/screensaver"/>
    </Router>
    </div>
  );
}
export default App;