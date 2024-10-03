import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//services data

// ... (previous code)

const services = [
  {
    name: "Development",
    description:
      "Creating an intuitive UI and seamless experiences, while also ensuring robust functionality and accessibility across diverse platforms, ultimately enhancing digital interactions globally.",
    link: "https://github.com/AtharvAsole?tab=repositories",
  },
  {
    name: "Machine Learning",
    description:
      "Developing algorithms and models that autonomously learn and adapt from data, enabling accurate predictions, pattern recognition, and automation across various domains.",
    link: "https://github.com/AtharvAsole?tab=repositories",
  },
  {
    name: "LeetCode",
    description:
      "Solved 100+ problems on LeetCode to enhance coding and algorithmic skills.",
    link: "https://leetcode.com/AtharvAsole/",
  },
  {
    name: "Code Studio",
    description:
      "Leveraging online channels and tools to strategically promote brands, products, or services, driving engagement, expanding reach, and ultimately converting leads into customers.",
    link: "#",
  },
];

// const Services = () => {
//   return (
//     <section className='section' id='services'>
//       {/* ... (previous code) */}

//       <motion.div
//         variants={fadeIn("left", 0.5)}
//         initial='hidden'
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.3 }}
//         className='flex-1'
//       >
//         {services.map((service, index) => {
//           const { name, description, link } = service;
//           return (
//             <div
//               className='border-b border-white/20 h-[146px] mb-[38px] flex'
//               key={index}
//             >
//               <div className='max-w-[476px]'>
//                 <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
//                   {name}
//                 </h4>
//                 <p className='font-secondary leading-tight'>{description}</p>
//               </div>
//               <div className='flex flex-col flex-1 items-end'>
//                 <a
//                   href='#'
//                   className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
//                 >
//                   <BsArrowUpRight />
//                 </a>
//                 <a href={link} className='text-gradient text-sm'>
//                   Learn more
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-sd lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Full Stack Developer (MERN) with over 2 years of experience.
            </h3>
            {/* <button className='btn btn-sm'>See my work</button> */}
          </motion.div>
          {/* services list */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {services.map((service, index) => {
              //desctructure service
              const { name, description, link } = service;
              return (
                <div
                  className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a
                      href={link}
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    {/* <a href='#' className='text-gradient text-sm'>
                      Learn more
                    </a> */}
                    <p className='text-gradient text-sm'>Learn more</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Services;
