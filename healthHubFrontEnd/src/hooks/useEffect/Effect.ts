import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const useScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: true,
          trigger: "#pin-header",
        },
      });
      if (window.scrollY > 124.16666412353516) {
        tl.to("#pin-header", {
          position: "fixed",
          top: 0,
          backgroundColor: "rgba(255,255,255)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "0px 0px 10px 10px",
          padding: "10px 10px",
          duration: 0.5,
        });
      } else {
        tl.to("#pin-header", {
          position: "absolute",
          top: 0,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0)",
          borderRadius: "0px 0px 0px 0px",
          padding: "2.5rem 4rem",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export const useHeaderVisibility = () => {
  const location = useLocation();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    checkHeader();
  }, [location]);

  const checkHeader = () => {
    const ListHide = ["/Registration", "/Login", "/Dashboard"];
    setIsShown(!ListHide.includes(location.pathname));
  };

  return isShown;
};
