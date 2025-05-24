import LogoTextSlider from "./logoSlider";

const HeroSection = () => {
  return (
    <section
      className="relative"
      style={{
        background: "linear-gradient(141.92deg, #F2FAFF 0%, #FFFFFF 58.83%)",
      }}
    >
      <img
        src="/assets/banner-line.png"
        alt="Decorative Background Line"
        aria-hidden="true"
        className="absolute max-lg:bottom-[10%] lg:top-[36%] left-0 w-full h-auto z-0 pointer-events-none select-none"
      />
      <div className="mx-8 lg:mx-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[49%]">
          <h1 className="pt-12 lg:pt-8 2xl:pt-0 text-4xl lg:text-5xl 2xl:text-6xl font-semibold font-montserrat text-darkgray mb-[38px]">
            Return and Reinvent
            <br />
            Community Conference 2025
          </h1>
          <p className="text-base lg:text-lg text-secondary font-roboto">
            Empowering Women, Caretakers, and Professionals to Navigate and
            Thrive
          </p>
          <p className="text-base lg:text-lg text-[#4F4F4F]">
            Join us for a transformative experience where we empower individuals
            returning to the workforce or reinventing their careers.
          </p>
          <div className="flex items-center gap-[25px] mt-[42px] flex-wrap text-xs font-medium font-montserrat">
            <div className="flex items-center gap-4">
              <img src="/assets/calendar.svg" alt="Date" className="w-5 h-5" />
              <span>22/2/2022</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/clock.svg" alt="Time" className="w-5 h-5" />
              <span>10:00am</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/assets/location.svg"
                alt="Location"
                className="w-5 h-5"
              />
              <span>Chicago Convention Center, Chicago, IL</span>
            </div>
          </div>
          <button
            className="flex items-center gap-3 mt-10 lg:mt-[86px] bg-gradient-to-r from-[#F95B5B] to-[#F1A038] text-white font-bold font-montserrat text-xl lg:text-2xl lg:leading-7 max-lg:px-6 lg:pl-9 lg:pr-[66px] py-4 lg:py-[26px] rounded-xl"
            style={{ boxShadow: "-8px 8px 28px 0px #0000000F" }}
          >
            Book Your Reservation
            <svg
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.92857 0.641846C2.36941 0.641846 1.81897 0.84352 1.40152 1.22387C0.98153 1.60676 0.728333 2.14413 0.728333 2.72308C0.728333 3.30203 0.981435 3.83931 1.40142 4.2222L7.00853 9.33249C7.19504 9.50247 7.19504 9.79601 7.00853 9.966L1.39593 15.0813L1.39053 15.0864C0.981553 15.4723 0.739185 16.0067 0.744642 16.5792C0.750099 17.1515 1.00247 17.6811 1.41779 18.0596C1.83058 18.4358 2.37361 18.6374 2.92662 18.6418C3.47961 18.6462 4.02567 18.4533 4.44469 18.0844L4.45025 18.0795L12.0553 11.1483C12.4753 10.7654 12.7283 10.2282 12.7283 9.64924C12.7283 9.0703 12.4752 8.53301 12.0552 8.15012L4.45562 1.22387C4.03817 0.84352 3.48774 0.641846 2.92857 0.641846Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="w-full lg:w-[51%] h-full z-10">
          <img
            src="/assets/speaker-woman.png"
            alt="Conference Speaker"
            className="w-full h-full"
          />
        </div>
      </div>
      <p className="mx-8 lg:mx-16 mt-8 lg:mt-20 xl:mt-[165px] text-center text-sm lg:text-[15px] font-roboto font-normal uppercase text-darkgray">
        Powering tools and integrations from companies all around the world(
        sponsor logos)
      </p>
      <LogoTextSlider />
    </section>
  );
};

export default HeroSection;
