import React from "react";
//countup
import CountUp from "react-countup";
//interactive obeserver hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-programmer bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Full Stack Developer (MERN) with over 2 years of experience.
            </h3>
            <p className='mb-6'>
              Three years in web development, I'm dedicated to ongoing learning,
              adopting new technologies to enhance my skills and craft
              cutting-edge digital experiences.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {InView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of
                  <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {InView ? <CountUp start={0} end={12} duration={12} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects
                  <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {InView ? <CountUp start={0} end={170} duration={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Solved Problems
                  <br /> on CodeStudio
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {InView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Solved Problems
                  <br /> on LeetCode
                </div>
              </div>
              {/* <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg '>Contact me</button>
                <a href='#' className='text-gradient btn-link '></a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
