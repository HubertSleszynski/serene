"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";
import { useRouter } from "next/navigation";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0"
          >
            <Image
              src="/assets/about/img.jpg"
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </motion.div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to Your Skin's Health and Beauty
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              Our beauty salon is where professionalism meets beauty. We
              specialize in a wide range of services, from facial treatments to
              eyebrow styling, always ensuring the highest quality and comfort
              for our clients. Our experienced team of cosmetologists uses only
              the best products to deliver optimal results. We invite you to
              experience our unique atmosphere and personalized approach that
              will make you feel truly special.
            </p>
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={13} text="Years On Market" />
              </div>
              <div>
                <StatsItem countNum={35} countText="k+" text="Happy Clients" />
              </div>
              <div>
                <StatsItem
                  countNum={97}
                  countText="%"
                  text="Natural Ingredients"
                />
              </div>
            </div>
            <button
              className="btn mx-auto xl:mx-0"
              onClick={handleContactClick}
            >
              Contact us
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
