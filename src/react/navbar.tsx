import gsap from "gsap";
import { useEffect } from "react";

import { PORTRAIT_ANIMATION } from "../constants";

const navbarAnimation = () => {
  gsap.fromTo(
    ".nav-icon",
    {
      opacity: 0,
      y: -10,
      delay: PORTRAIT_ANIMATION,
    },
    {
      opacity: 1,
      ease: "power4.out",
      duration: 2,
      y: 0,
      delay: PORTRAIT_ANIMATION,
    }
  );

  gsap.from(".hamburg-icon", {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "left center",
    stagger: 0.1,
    delay: PORTRAIT_ANIMATION,
  });
};

export const Navbar = () => {
  useEffect(() => {
    navbarAnimation();
  }, []);

  return (
    <div className="py-8 px-5 flex items-center justify-between">
      <span className="text-[13px] nav-icon">LILCODERMAN</span>
      <div className="flex flex-col gap-y-1">
        <div className="h-[1.5px] w-[25px] bg-[#F0AD24] hamburg-icon" />
        <div className="h-[1.5px] w-[25px] bg-[#F0AD24] hamburg-icon" />
        <div className="h-[1.5px] w-[17px] bg-[#F0AD24] hamburg-icon" />
      </div>
    </div>
  );
};
