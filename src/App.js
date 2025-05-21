import "./App.css";
import AnnouncementBar from "./components/announcementBar";
import ConferenceIntro from "./components/ConferenceIntro";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import WhoShouldAttend from "./components/WhoShouldAttend";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <ConferenceIntro />
      <WhoShouldAttend />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
