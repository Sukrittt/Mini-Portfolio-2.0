import gsap from "gsap";
import { useEffect } from "react";

import { PORTRAIT_ANIMATION } from "../constants";

const footerBannerAnimation = () => {
  gsap.from(".star-icon", {
    opacity: 0,
    scale: 0,
    rotate: -100,
    duration: 0.9,
    ease: "power4.out",
    delay: PORTRAIT_ANIMATION + 0.75,
  });

  gsap.from(".starring-text", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "power4.out",
    delay: PORTRAIT_ANIMATION,
  });

  gsap.from(".footer-item", {
    opacity: 0,
    y: 20,
    duration: 2,
    ease: "power4.out",
    delay: PORTRAIT_ANIMATION,
  });
};

export const FootBanner = () => {
  useEffect(() => {
    footerBannerAnimation();
  }, []);

  return (
    <div className="relative h-full">
      <div className="absolute top-12 left-44">
        <div className="flex flex-col gap-y-2 font-extralight">
          <span className="text-[#d3d3d3] text-[14px] starring-text">
            STARRING
          </span>
          <div className="flex flex-col gap-y-1 text-xl">
            <span className="starring-text">MAIN CHARACTER</span>
            <span className="starring-text">THE ONLY HERO</span>
            <span className="starring-text">LONE PROTAGONIST</span>
            <span className="starring-text">SOLO STAR</span>
          </div>
        </div>
      </div>

      <img
        src="/star.svg"
        alt="star-icon"
        className="absolute h-[200px] w-[200px] -top-[75px] right-72 star-icon"
      />

      <div className="absolute bottom-8 px-12 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center footer-item">
            <img src="/globe.svg" alt="globe-icon" className="h-6 w-6" />
            <img src="/globe.svg" alt="globe-icon" className="h-6 w-6 -ml-3" />
          </div>

          <div className="flex flex-col gap-y-4 footer-item">
            <div className="border flex items-center">
              <div className="border-r flex items-center justify-center px-4">
                <span className="text-6xl font-bold">R</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[13px] border-b font-bold w-full text-center tracking-wider">
                  RESTRICTED
                </span>
                <span className="text-[13px] w-[55%] text-center">
                  Lorem ipsum dolor sit amet consectetur.
                </span>
              </div>
            </div>

            <span className="text-[#A9A9A9] text-xs">
              © 2025 rights reserved. All rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
