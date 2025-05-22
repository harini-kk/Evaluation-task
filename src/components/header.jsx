import { useState, useEffect } from "react";
import AnnouncementBar from "./announcementBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <>
      <AnnouncementBar />
      <header
        className="w-full bg-white sticky top-0 z-50"
        style={{ boxShadow: "0px 4px 4px 0px #0000000D" }}
      >
        <div className="mx-8 lg:mx-16 py-3 flex justify-between items-center gap-2">
          <img
            src="/assets/header-logo.png"
            alt="Header Logo"
            className="w-3/5 sm:w-[310px] h-auto"
          />
          <nav className="hidden xl:flex items-center gap-[11px] text-[17px] font-helvetica">
            <a href="#faq" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
              <p>Faq</p>
            </a>
            <a href="#attend" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
              <p>Attend</p>
            </a>
            <div className="relative group">
              <a href="#sponsors" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                Sponsors <img src="/assets/arrow-down.svg" alt="Expand" />
              </a>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md text-black font-normal opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-150 z-10 p-4 min-w-[250px]">
                <li>
                  <a
                    href="#sponsor-benefits"
                    className="border-b-2 border-black/0 hover:scale-105 hover:border-primary"
                  >
                    Sponsor Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsor-packages"
                    className="border-b-2 border-black/0 hover:scale-105 hover:border-primary"
                  >
                    Sponsor Packages
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <a href="#speakers" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                Speakers <img src="/assets/arrow-down.svg" alt="Expand" />
              </a>
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md text-black font-normal opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-150 p-4 z-10 min-w-[250px]">
                <li>
                  <a href="#keynotes" className="border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                    Keynotes
                  </a>
                </li>
                <li>
                  <a href="#speaker-list" className="border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                    Speaker List
                  </a>
                </li>
              </ul>
            </div>
            <a href="#catalog" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
              <p>Session Catalog</p>
            </a>
            <a href="#about" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
              <p>About Us</p>
            </a>
            <a href="#contact" className="flex items-center border-b-2 border-black/0 hover:scale-105 hover:border-primary">
              <p>Contact Us</p>
            </a>
          </nav>

          <div className="xl:hidden mobile-hamburger-container">
            <button onClick={toggleMenu} className="ToggleButton">
              <svg
                className={`${menuOpen ? "hidden" : "block"}`}
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z"
                  fill="black"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="25"
                height="25"
              >
                <path
                  d="M7 4C6.744 4 6.488 4.097 6.293 4.293L4.293 6.293C3.902 6.684 3.902 7.317 4.293 7.707L11.586 15 4.293 22.293C3.902 22.684 3.902 23.317 4.293 23.707L6.293 25.707C6.684 26.098 7.317 26.098 7.707 25.707L15 18.414 22.293 25.707C22.683 26.098 23.317 26.098 23.707 25.707L25.707 23.707C26.098 23.316 26.098 22.683 25.707 22.293L18.414 15 25.707 7.707C26.098 7.317 26.098 6.683 25.707 6.293L23.707 4.293C23.316 3.902 22.683 3.902 22.293 4.293L15 11.586 7.707 4.293C7.512 4.097 7.256 4 7 4Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="xl:hidden h-screen text-end pt-5 bg-white px-8 pb-6 text-[17px] font-helvetica border-t border-gray-200 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a href="#faq" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                  Faq
                </a>
              </li>
              <li>
                <a href="#attend" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                  Attend
                </a>
              </li>
              <li>
                <div>
                  <a href="#sponsors" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                    Sponsors
                  </a>
                  <ul className="mr-4 space-y-1 my-3">
                    <li>
                      <a
                        href="#sponsor-benefits"
                        onClick={toggleMenu}
                        className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary"
                      >
                        Sponsor Benefits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sponsor-packages"
                        onClick={toggleMenu}
                        className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary"
                      >
                        Sponsor Packages
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <a href="#speakers" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                    Speakers
                  </a>
                  <ul className="mr-4 space-y-1 my-3">
                    <li>
                      <a href="#keynotes" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                        Keynotes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#speaker-list"
                        onClick={toggleMenu}
                        className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary"
                      >
                        Speaker List
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#catalog" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                  Session Catalog
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu} className="py-2 border-b-2 border-black/0 hover:scale-105 hover:border-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
