import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.component";
import Homepage from "./components/homepage.component";
import Footer from "./components/footer.component";
import CreateActivity from "./components/creator-view/create-activity.component";
import ActivityList from "./components/creator-view/activity-list.component";
import EditActivity from "./components/creator-view/edit-activity.component";
import GuestActivityList from "./components/guest-view/guest-activity-list.component";
import ActivityId from "./components/guest-view/activity-id.component";
import GuestLogin from "./components/guest-view/guest-login.component";
import GuestEnter from "./components/guest-view/guest-enter";
import CreatorLogin from "./components/creator-view/creator-login.component";
import CreateProject from "./components/presentor-view/create-project.component";
import ProjectLists from "./components/projects-list.component";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/createActivity" element={<CreateActivity />}></Route>
          <Route path="/activityList" element={<ActivityList />}></Route>
          <Route path="/activityList/:id" element={<ActivityList />}></Route>
          <Route path="/Edit/:id" element={<EditActivity />}></Route>
          <Route
            path="/guestActivityList"
            element={<GuestActivityList />}
          ></Route>
          <Route path="/guestActivityList/:id" element={<ActivityId />}></Route>
          <Route path="/guestLogin" element={<GuestLogin />}></Route>
          <Route path="/guestEnter" element={<GuestEnter />}></Route>
          <Route path="/creatorLogin" element={<CreatorLogin />}></Route>
          <Route path="/createProject" element={<CreateProject />}></Route>
          <Route path="/projectList" element={<ProjectLists />}></Route>
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
