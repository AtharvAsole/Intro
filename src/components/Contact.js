import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// import { IoCheckmarkDoneSharp } from "react-icons/io5";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const OnClick = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bc115ee7-0ed6-4de8-9fd7-1d21cab0ef0b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsSubmitted(true);
    }
  };

  return (
    <section className=' py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='h2 uppercase text-accent mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          {isSubmitted ? (
            // Display success message
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            >
              <h4 className='h3 ws uppercase text-green-500 mb-2 tracking-wide'>
                Success!
                <br />
                <br /> Your form has been successfully submitted. Feel free to{" "}
                <a className='ul' href='https://github.com/AtharvAsole'>
                  explore
                </a>{" "}
                my work in the meantime.
              </h4>
              {/* <IoCheckmarkDoneSharp /> */}
            </motion.div>
          ) : (
            // Display form
            <motion.form
              onSubmit={OnClick}
              enctype='text/plain'
              variants={fadeIn("left", 0.5)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            >
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type='text'
                name='name'
                placeholder='Your name'
                required
              />
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type='email'
                name='email'
                placeholder='Your email'
                required
              />
              <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                name='message'
                type='text'
                placeholder='Your message'
                required
              ></textarea>
              <button type='submit' id='myButton' className='btn btn-lg'>
                Send message
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
