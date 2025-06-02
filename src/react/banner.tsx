import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

import { PORTRAIT_ANIMATION } from "../constants";

const bannerAnimation = () => {
  const splitText = new SplitType(".about-text");
  const bannerText = new SplitType(".banner-text");

  gsap.from(splitText.chars, {
    opacity: 0,
    y: 5,
    stagger: 0.01,
    ease: "power4.out",
    delay: PORTRAIT_ANIMATION,
  });

  gsap.from(bannerText.chars, {
    y: -10,
    stagger: {
      each: 0.1,
      from: "end",
    },
    delay: PORTRAIT_ANIMATION + 0.25,
    ease: "power4.out",
  });

  gsap.from(".portrait", {
    y: 600,
    duration: 1.1,
    ease: "power4.out",
  });
};

export const Banner = () => {
  useEffect(() => {
    bannerAnimation();
  }, []);

  return (
    <>
      <img
        src="/portrait.png"
        alt="portrait"
        className="absolute left-[28%] top-[400px] h-[600px] w-[600px] z-50 portrait"
      />

      <div className="h-full flex justify-center relative">
        <span className="text-[280px] banner-font banner-text">STARDOM</span>
        <span className="absolute bottom-40 left-16 text-[14px] about-text">
          Your life, your movie—take the lead role
        </span>

        <span className="absolute bottom-40 right-16 text-[14px] about-text">
          and remember, there won't be any sequeces
        </span>
      </div>
    </>
  );
};
