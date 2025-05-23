export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 bg-tertiary font-manrope">
      <div className="pt-[57px] grid grid-cols-1 md:grid-cols-5 gap-7">
        <div className="md:col-span-2">
          <img
            src="/assets/footer-logo.png"
            alt="Return and Reinvent Conference Logo"
            className="sm:w-[417px] h-auto"
          />
          <p className="text-base font-medium text-darkgray mt-[11px] sm:w-[269px]">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>

        <div className="text-base md:mt-[33px]">
          <h3 className="text-primary font-bold mb-5">Support</h3>
          <ul className="font-medium text-darkgray">
            <li className="mb-4"><a href="/">Getting Started</a></li>
            <li className="mb-4"><a href="/">FAQS</a></li>
            <li className="mb-4"><a href="/">Help Articles</a></li>
            <li className="mb-4"><a href="/">Report an issue</a></li>
            <li><a href="/">Contact Help Desk</a></li>
          </ul>
        </div>

        <div className="text-base md:mt-[33px]">
          <h3 className="text-primary font-bold mb-5">Services</h3>
          <ul className="font-medium text-darkgray">
            <li className="mb-4"><a href="/">Booking appointments</a></li>
            <li className="mb-4"><a href="/">Online consultations</a></li>
            <li className="mb-4"><a href="/">Prescriptions</a></li>
            <li className="mb-4"><a href="/">Medicine Refills</a></li>
            <li><a href="/">Medical Notes</a></li>
          </ul>
        </div>

        <div className="text-base md:mt-[33px]">
          <h3 className="text-primary font-bold mb-5">Legal</h3>
          <ul className="font-medium text-darkgray">
            <li className="mb-4"><a href="/">Terms & Conditions</a></li>
            <li className="mb-4"><a href="/">Privacy Policy</a></li>
            <li className="mb-4"><a href="/">Cookie Notice</a></li>
            <li className="mb-4"><a href="/">Cookie Preferences</a></li>
            <li><a href="/">Trust Center</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary mt-10 pb-9">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex gap-3 text-primary text-xl mt-[30px]">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><img src="/assets/facebook-logo.png" className="h-8" alt="Facebook logo" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="/assets/instagram-logo.png" className="h-8" alt="Instagram logo" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/assets/linkedin-logo.png" className="h-8" alt="LinkedIn logo" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><img src="/assets/youtube-logo.png" className="h-8" alt="Youtube logo" /></a>
          </div>
          <p className="text-base font-bold text-darkgray text-center md:text-right">
            HealNet 2024 © All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
