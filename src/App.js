//CSS STYLING
import './App.css';
import './Styling.css';
//PACKAGES
import { Router } from "@reach/router";
//PAGES & COMPONENTS
import LandingPage from './components/LandingPage'
import LoginPage from "./components/LoginPage";
import MenuPage from "./components/MenuPage";
import FeedPage from "./components/FeedPage";
import ProfilePage from "./components/ProfilePage";
import PostPage from "./components/PostPage";
import ScreenSaverPage from "./components/screensaverpage/ScreenSaverPage";
import AddPostForm from './components/form/AddPostForm';
import BioPage from './components/BioPage'


function App() {
  return (
    <div className="App">
    <Router>
      <LoginPage path="/login"/>
      <LandingPage path="/"/>
      <MenuPage path="/account"/>
      <FeedPage path="/feed"/>
      <ProfilePage path="/profile"/>
      <PostPage path="/post"/>
      <ScreenSaverPage path="/screensaver"/>
      <AddPostForm path="/feed/add" />
      <BioPage path="/BioPage" />
    </Router>
    </div>
  );
}
export default App;