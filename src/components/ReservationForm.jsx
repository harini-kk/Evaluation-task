import { useState } from "react";
export default function ReservationForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (value) =>
    /^(?![.!#$%&'*+/=?^_`{|}~-])(?!.*\.{2})[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/.test(
      value
    );
  const validatePhone = (value) => /^\+?\d+$/.test(value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setEmailError("");
    } else {
      setEmailError(validateEmail(value) ? "" : "Enter a valid email address");
    }
    setSuccess("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (value === "") {
      setPhoneError("");
    } else {
      setPhoneError(validatePhone(value) ? "" : "Enter a valid phone number");
    }
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    setEmailError(emailValid ? "" : "Enter a valid email address");
    setPhoneError(phoneValid ? "" : "Enter a valid phone number");

    if (emailValid && phoneValid) {
      setPhone("");
      setEmail("");
      setSuccess("Reservation Confirmed!");
    } else {
      setSuccess("");
    }
  };

  return (
    <section className="rounded-[32px] mx-8 lg:mx-16 pt-10 pl-10 pr-[52px] pb-[52px] bg-[linear-gradient(90deg,_#F1A038_0%,_#FB4A64_100%)] my-12 shadow-xl text-white font-manrope">
      <h2 className="font-montserrat text-3xl lg:text-[40px] lg:leading-[40px] font-semibold mb-8 text-left">
        Easily book your <span className="font-bold">Reservation</span> in 2
        simple steps.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-bottom gap-5 lg:gap-10 xl:gap-[78px]"
      >
        <div className="flex flex-col md:flex-row lg:w-3/4 gap-5 md:gap-8 xl:gap-[68px]">
          <div className="flex flex-col w-full">
            <label className="flex items-center gap-1 text-white text-lg font-semibold font-roboto mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 5.33337H5.33335C3.86669 5.33337 2.68002 6.53337 2.68002 8.00004L2.66669 24C2.66669 25.4667 3.86669 26.6667 5.33335 26.6667H26.6667C28.1334 26.6667 29.3334 25.4667 29.3334 24V8.00004C29.3334 6.53337 28.1334 5.33337 26.6667 5.33337ZM26.1334 11L16.7067 16.8934C16.28 17.16 15.72 17.16 15.2934 16.8934L5.86669 11C5.73299 10.925 5.61591 10.8236 5.52254 10.702C5.42916 10.5804 5.36144 10.4411 5.32345 10.2925C5.28547 10.144 5.27802 9.98929 5.30156 9.83778C5.3251 9.68628 5.37914 9.54113 5.4604 9.41111C5.54166 9.28109 5.64845 9.16892 5.77432 9.08137C5.90019 8.99382 6.04252 8.93272 6.19268 8.90177C6.34285 8.87082 6.49773 8.87066 6.64796 8.9013C6.79819 8.93195 6.94064 8.99275 7.06669 9.08004L16 14.6667L24.9334 9.08004C25.0594 8.99275 25.2019 8.93195 25.3521 8.9013C25.5023 8.87066 25.6572 8.87082 25.8074 8.90177C25.9575 8.93272 26.0998 8.99382 26.2257 9.08137C26.3516 9.16892 26.4584 9.28109 26.5396 9.41111C26.6209 9.54113 26.6749 9.68628 26.6985 9.83778C26.722 9.98929 26.7146 10.144 26.6766 10.2925C26.6386 10.4411 26.5709 10.5804 26.4775 10.702C26.3841 10.8236 26.267 10.925 26.1334 11Z"
                  fill="white"
                />
              </svg>
              Email Address
            </label>
            <input
              value={email}
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter Your Email Address"
              aria-label="Email Address"
              className="text-gray rounded-xl p-[18px] w-full text-sm sm:text-base placeholder:font-semibold focus:outline-none"
            />
            {emailError && (
              <p className="text-error text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label className="flex items-center gap-1 text-lg font-roboto font-semibold mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6676 20.6353L21.562 18.7401C21.8172 18.488 22.14 18.3154 22.4913 18.2433C22.8426 18.1712 23.2072 18.2027 23.541 18.334L25.8498 19.2562C26.1871 19.3931 26.4763 19.6269 26.681 19.928C26.8857 20.2292 26.9967 20.5842 27 20.9483V25.1786C26.998 25.4263 26.946 25.6711 26.847 25.8981C26.748 26.1252 26.6041 26.3298 26.4239 26.4998C26.2438 26.6697 26.0311 26.8015 25.7987 26.887C25.5663 26.9726 25.3191 27.0102 25.0718 26.9976C8.89312 25.9908 5.62864 12.2846 5.01126 7.03904C4.9826 6.78145 5.00879 6.5207 5.0881 6.27396C5.1674 6.02721 5.29803 5.80006 5.47139 5.60745C5.64475 5.41484 5.85691 5.26113 6.09392 5.15644C6.33092 5.05175 6.5874 4.99844 6.84648 5.00003H10.9313C11.2958 5.00111 11.6517 5.11126 11.9531 5.31632C12.2545 5.52137 12.4877 5.81195 12.6227 6.15068L13.5446 8.46043C13.6801 8.79299 13.7147 9.15812 13.644 9.51023C13.5733 9.86233 13.4005 10.1858 13.1471 10.4402L11.2527 12.3354C11.2527 12.3354 12.3437 19.7215 19.6676 20.6353Z"
                  fill="white"
                />
              </svg>
              Contact Number
            </label>
            <input
              value={phone}
              type="tel"
              onChange={handlePhoneChange}
              placeholder="Enter Your Contact Number"
              aria-label="Phone Number"
              className="text-gray rounded-xl p-[18px] w-full text-sm sm:text-base placeholder:font-semibold focus:outline-none"
            />
            {phoneError && (
              <p className="text-error text-sm mt-1">{phoneError}</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/4 mt-2 lg:mt-12 flex items-start">
          <button
            type="submit"
            className="bg-white text-gray text-xl leading-6 w-full font-bold p-[18px] justify-center rounded-xl flex items-center gap-2"
          >
            Reserve Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C11.3135 -0.00170183 12.6146 0.256133 13.8281 0.758789C15.0415 1.26144 16.1438 1.99879 17.0713 2.92871C18.0012 3.8562 18.7386 4.9585 19.2412 6.17188C19.7439 7.38535 20.0017 8.68654 20 10C20.0017 11.3135 19.7439 12.6146 19.2412 13.8281C18.7386 15.0415 18.0012 16.1438 17.0713 17.0713C16.1438 18.0012 15.0415 18.7386 13.8281 19.2412C12.6146 19.7439 11.3135 20.0017 10 20C8.68654 20.0017 7.38535 19.7439 6.17188 19.2412C4.9585 18.7386 3.8562 18.0012 2.92871 17.0713C1.99879 16.1438 1.26144 15.0415 0.758789 13.8281C0.256133 12.6146 -0.00170183 11.3135 0 10C-0.00167444 8.68654 0.256135 7.38535 0.758789 6.17188C1.26144 4.9585 1.99881 3.8562 2.92871 2.92871C3.8562 1.99881 4.9585 1.26144 6.17188 0.758789C7.38535 0.256135 8.68654 -0.00167444 10 0Z"
                fill="#F95B5B"
              />
              <path
                d="M10 0C11.3135 -0.00170183 12.6146 0.256133 13.8281 0.758789C15.0415 1.26144 16.1438 1.99879 17.0713 2.92871C18.0012 3.8562 18.7386 4.9585 19.2412 6.17188C19.7439 7.38535 20.0017 8.68654 20 10C20.0017 11.3135 19.7439 12.6146 19.2412 13.8281C18.7386 15.0415 18.0012 16.1438 17.0713 17.0713C16.1438 18.0012 15.0415 18.7386 13.8281 19.2412C12.6146 19.7439 11.3135 20.0017 10 20C8.68654 20.0017 7.38535 19.7439 6.17188 19.2412C4.9585 18.7386 3.8562 18.0012 2.92871 17.0713C1.99879 16.1438 1.26144 15.0415 0.758789 13.8281C0.256133 12.6146 -0.00170183 11.3135 0 10C-0.00167444 8.68654 0.256135 7.38535 0.758789 6.17188C1.26144 4.9585 1.99881 3.8562 2.92871 2.92871C3.8562 1.99881 4.9585 1.26144 6.17188 0.758789C7.38535 0.256135 8.68654 -0.00167444 10 0Z"
                stroke="white"
              />
              <path d="M6 10L9 13L15 7" fill="#F95B5B" />
              <path
                d="M6 10L9 13L15 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
      {success && (
        <p className="text-green-700 text-base font-semibold mt-4">{success}</p>
      )}
    </section>
  );
}
