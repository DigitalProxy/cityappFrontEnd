//CSS STYLING
import './App.css';
import './Styling.css';
//PACKAGES
import { Router } from "@reach/router";
//PAGES & COMPONENTS
import LoadingPage from "./components/LoadingPage";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import FeedPage from "./components/FeedPage";
import AccountPage from "./components/AccountPage";
import PostPage from "./components/PostPage"
import BioPage from "./components/BioPage";
import ArtistsBioPage from "./components/ArtistsBioPage";
import Like from "./components/Like";
import Share from "./components/Share";
import Comment from "./components/Comment";


function App() {
  return (
    <div className="App">
    <Router>  
      <LoadingPage path="/loading"/>
      <LoginPage path="/login"/>
      <LandingPage path="/"/>
      <FeedPage path="/feed"/>
      <AccountPage path="/account"/>
      <PostPage path="/post"/>
      <BioPage path="/bio"/>
      <ArtistsBioPage path="/artistsbio"/>
      <Like path="/like"/>
      <Share path="/share"/>
      <Comment path="/comment"/>
    </Router>
    </div>
  );
}
export default App;