import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent '>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                I've developed a dynamic web app with the latest tech, uniting
                innovation and user-centric design for an engaging experience.
              </p>
              <button className='btn btn-sm'>
                <a href='https://github.com/AtharvAsole'>View all projects</a>
              </button>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlays */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>

              <img
                className='group-hover:scale-125 transition-all duration-500 '
                src={Img1}
                alt=''
              />
              {/* prectitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://atharv4123-keeper.netlify.app/'>Keeper</a>
                </span>
              </div>
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                  Keeper is used to store note and can delete it too.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}

            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlays */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>

              <img
                className='group-hover:scale-125 transition-all duration-500 '
                src={Img2}
                alt=''
              />
              {/* prectitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Secrets Web</span>
              </div>
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                  Secrets web were you can privatise your secrets.
                </span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlays */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '></div>

              <img
                className='group-hover:scale-125 transition-all duration-500 '
                src={Img3}
                alt=''
              />
              {/* prectitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://atharv4123-fightersamurai.netlify.app/'>
                    Fighter Samurai
                  </a>
                </span>
              </div>
              {/*title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>
                  Fighter Samurai is a 2D fighting multiplayer game.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
