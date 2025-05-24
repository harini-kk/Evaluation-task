import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ConferenceIntro from "./components/ConferenceIntro";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import ReservationForm from "./components/ReservationForm";
import WhoShouldAttend from "./components/WhoShouldAttend";
import WorkPage from "./pages/workPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ConferenceIntro />
                <WhoShouldAttend />
                <ReservationForm />
              </>
            }
          />
          <Route path="/works" element={<WorkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
