const emailSetUp = {
  formSubmitEmail: "https://formsubmit.co/akabhowmick@gmail.com",
  redirectLink: "https://akashbhowmick.com/",
};

export const ContactForm = () => {
  const formContentStyles =
    "bg-white rounded-xl mx-auto px-6 py-4 max-w-lg";
  const inputStyles =
    "block w-full px-4 py-3  text-lg text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 caret-blue-500";
  const buttonStyles =
    "inline-flex items-center justify-center w-full px-4 py-3 mt-4 text-lg font-semibold text-white transition-all duration-200 bg-green-700 border border-transparent rounded-md focus:outline-none hover:bg-green-800 focus:ring-2 focus:ring-offset-2 focus:ring-green-500";

  return (
    <div className={formContentStyles} style={{fontSize: "100%"}}>
      <form
        action={emailSetUp.formSubmitEmail}
        method="POST"
        className="space-y-6 text-xl"
        style={{fontSize: "100%"}}
      >
        <div className="space-y-4">
          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              required
              placeholder="Enter your full name"
              className={inputStyles}
            />
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              placeholder="Enter your email address"
              className={inputStyles}
            />
          </div>

          {/* Phone field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              required
              placeholder="Enter your phone number"
              className={inputStyles}
            />
          </div>

          {/* Message field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              required
              placeholder="Enter your message"
              className={`${inputStyles} resize-none`}
              
            ></textarea>
          </div>
        </div>

        {/* Hidden inputs for additional data */}
        <input type="hidden" name="_next" value={emailSetUp.redirectLink} />
        <input type="hidden" name="_subject" value="Contact Form Inquiry!" />
        <input type="hidden" name="_template" value="table" />

        {/* Submit button */}
        <div>
          <button type="submit" className={buttonStyles}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
