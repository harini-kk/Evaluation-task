import "./App.css";
import ConferenceIntro from "./components/ConferenceIntro";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import ReservationForm from "./components/ReservationForm";
import WhoShouldAttend from "./components/WhoShouldAttend";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ConferenceIntro />
      <WhoShouldAttend />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
