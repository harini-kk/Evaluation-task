import "./App.css";
import AnnouncementBar from "./components/announcementBar";
import ConferenceIntro from "./components/ConferenceIntro";
import WhoShouldAttend from "./components/WhoShouldAttend";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <ConferenceIntro />
      <WhoShouldAttend />
    </div>
  );
}

export default App;
