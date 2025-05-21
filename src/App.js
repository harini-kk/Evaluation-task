import "./App.css";
import AnnouncementBar from "./components/announcementBar";
import ConferenceIntro from "./components/ConferenceIntro";
import ReservationForm from "./components/ReservationForm";
import WhoShouldAttend from "./components/WhoShouldAttend";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <ConferenceIntro />
      <WhoShouldAttend />
      <ReservationForm/>
    </div>
  );
}

export default App;
