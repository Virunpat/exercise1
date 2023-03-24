import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import StateAssignmentOne from "./components/StateAssignmentOne"
import StateAssignmentTwo from "./components/StateAssignmentTwo"
import "./styles/app.css"
import "./styles/Favourite.css"
import "./styles/Gallery.css"
import "./styles/Profile.css"

function App() {
  
  return (
    <div className="app"> 
      <FavoriteSites/>
      <Profile/>
      <Gallery/>

      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  )
}

export default App
