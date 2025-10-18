import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const apiKey = import.meta.env.VITE_API_KEY_FORM;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.success(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="items-center w-full container py-10 px-5 md:px-20 lg:px-32 mx-auto overflow-hidden"
      id="Contact"
    >
      <h1 className="text-center text-2xl md:text-4xl mb-2 font-bold">
        Contact{" "}
        <span className="underline underline-offset-4 under font-light decoration-1">
          With Us
        </span>
      </h1>
      <p className="text-gray-600 max-w-80 text-center mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto pt-8 text-gray-700"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded py-2 px-4"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded py-2 px-4 mb-10"
              required
            />
          </div>
        </div>

        <div className="text-left">
          Message
          <textarea
            className="w-full h-50 border border-gray-300 py-2 px-4 mt-2 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white rounded py-2 px-12 mt-8">
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
