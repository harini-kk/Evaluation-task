export default function WhoShouldAttend() {
  return (
    <section className="flex flex-col lg:flex-row mx-8 lg:mx-16 mt-24 gap-[77px]">
      <div className="w-full lg:w-[55%] lg:mt-[74px]">
        <h2 className="text-3xl lg:text-[40px] font-semibold text-darkgray mb-6 font-montserrat">
          Who <span className="bg-[linear-gradient(98.64deg,_#F95B5B_27.32%,_#F1A038_100%)] bg-clip-text text-transparent">Should</span> Attend?
        </h2>
        
        <div className="space-y-6 text-gray font-roboto text-lg leading-[24px] pl-[39px]">
          <p>
            The Return and Reinvent Community Conference is a one-of-a-kind event that bridges the gap
            for women, caretakers, and professionals looking to re-enter or pivot in their careers.
            With rapid technological changes and evolving industry landscapes, this conference offers
            a platform to explore new opportunities, gain upskilling insights, and build a sustainable career path.
          </p>

          <p>
            Learn from experts across fields like AI, data, and remote work solutions. Gain the tools,
            mentorship, and confidence to navigate the challenges of a dynamic workforce.
          </p>

          <p>
            The Return and Reinvent Community Conference is a one-of-a-kind event that bridges the gap
            for women, caretakers, and professionals looking to re-enter or pivot in their careers.
            With rapid technological changes
          </p>

          <p>
            The Return and Reinvent Community Conference is a one-of-a-kind event that bridges the gap
            for women, caretakers, and professionals looking to re-enter or pivot in their careers.
            With rapid technological changes and evolving industry landscapes, this conference offers
            a platform to explore new opportunities, gain upskilling insights, and build a sustainable career path.
          </p>

          <p>
            Learn from experts across fields like AI, data, and remote work solutions. Gain the tools,
            mentorship, and confidence to navigate the challenges of a dynamic workforce.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
        <img
          src="/assets/who-should-attend.png"
          alt="Person pointing"
          className="w-full object-contain object-top"
        />
      </div>
    </section>
  );
}
