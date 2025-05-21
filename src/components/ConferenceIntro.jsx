export default function ConferenceIntro() {
  return (
    <section className="rounded-28px p-[2px] bg-[linear-gradient(96.34deg,_#F95B5B_0.94%,_#F1A038_96.46%)] mx-8 lg:mx-16 mt-[73.75px]">
      <div
        className="rounded-26px bg-white max-lg:p-8 lg:pr-[45px] lg:pl-[34px] lg:pt-[65px] lg:pb-[68px] lg:gap-[43px] flex flex-col lg:flex-row overflow-hidden"
        style={{
          background:
            "radial-gradient(114.87% 113.36% at 40.95% -10.45%, #FFFFFF 32.81%, #F8FDFF 97.64%)",
        }}
      >
        <div className="w-full lg:w-[46%] rounded-20px">
          <img
            src="/assets/conference.jpg"
            alt="Conference Crowd"
            className="w-full h-full rounded-20px object-cover object-right"
          />
        </div>

        <div className="w-full lg:w-[54%] mt-8 lg:mt-[21px] flex flex-col justify-center">
          <h2 className="font-montserrat text-3xl lg:text-40px lg:leading-[56px] font-semibold text-darkgray mb-8">
            What is the Return and Reinvent Conference?
          </h2>
          <div className="lg:pl-[17px] font-roboto text-lg leading-[24px]">
            <p className="mb-6 text-gray">
              The Return and Reinvent Community Conference is a one-of-a-kind
              event that bridges the gap for women, caretakers, and
              professionals looking to re-enter or pivot in their careers. With
              rapid technological changes and evolving industry landscapes, this
              conference offers a platform to explore new opportunities, gain
              upskilling insights, and build a sustainable career path.
            </p>
            <p className="mb-6 text-gray">
              Learn from experts across fields like AI, data, and remote work
              solutions. Gain the tools, mentorship, and confidence to navigate
              the challenges of a dynamic workforce.
            </p>
            <p className="text-gray mb-[58px]">
              The Return and Reinvent Community Conference is a one-of-a-kind
              event that bridges the gap for women, caretakers, and
              professionals looking to re-enter or pivot in their careers. With
              rapid technological changes
            </p>
            <button className="bg-[#F95B5B] font-manrope text-white text-xl lg:text-2xl font-bold px-[18px] md:px-9 py-[18px] rounded-xl w-fit">
              Learn more about us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
