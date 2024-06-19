import { cn } from "@/lib/utils";
import { SideBarItemData } from "@/type";
import { useGSAP } from "@gsap/react";
import { cva } from "class-variance-authority";
import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { FaChevronDown, FaCog, FaDesktop, FaRegClock } from "react-icons/fa";
import { DashboardContext } from "../Pages/Dashboard";

const sideBarStyle = cva(
  "w-full text-neutral-900/80  py-4 px-5 cursor-pointer  aria-selected:bg-neutral-400/40 aria-selected:text-neutral-900/80 hover:bg-neutral-400/20 hover:text-neutral-900 transition-all ease-in-out ",
  {
    variants: {
      active: {
        default: "text-neutral-900/80",
        active: "text-neutral-900",
      },
    },
    defaultVariants: {
      active: "default",
    },
  }
);

const sideBarItemData: SideBarItemData = {
  desktop: {
    main: "Job desk work",
    sub: {},
    icon: <FaDesktop className="text-xl" />,
  },
  attendance: {
    main: "attendance",
    sub: {
      "Daily log": "/dailyLog",
      Request: "/request",
      Details: "/details",
      Summary: "/summary",
    },
    icon: <FaRegClock className="text-xl" />,
  },
  settings: {
    main: "settings",
    sub: {
      Profile: "/profile",
      Password: "/password",
      Payment: "/payment",
    },
    icon: <FaCog className="text-xl" />,
  },
};

interface sideBarItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: "Drop" | "Single";
  displayName: "desktop" | "attendance" | "settings";
}

// Using gsap fo animation to accoridion
gsap.registerPlugin(useGSAP);

function SideBarItem({ type, displayName }: sideBarItemProps) {
  const [open, setOpen] = useState(false);

  const { active, setActive } = useContext(DashboardContext);

  const refContainer = useRef(null);
  const refContainerDropData = useRef(null);
  const { contextSafe } = useGSAP();

  const chevronAnimation = contextSafe(() => {
    if (refContainer.current != null && refContainerDropData.current != null) {
      const eleme = (refContainer.current as HTMLDivElement).childNodes[0];
      const elemeDropData = refContainerDropData.current as HTMLDivElement;
      const tl = gsap.timeline();
      tl.to(eleme, {
        rotation: !open ? 0 : 180,
        ease: "power4.inOut",
      });
      tl.to(elemeDropData, {
        height: !open ? 0 : "auto",
        display: !open ? "flex" : "hidden",
        ease: "power4.inOut",
      });
      setOpen(!open);
      console.warn(active);
    }
  });

  return (
    <>
      <div
        className={cn(
          sideBarStyle(),
          open ? "bg-neutral-500/400" : "bg-transparent"
        )}
        onClick={chevronAnimation}
      >
        <div className="w-full min-w-[100%] inline-flex items-center justify-between gap-3 ">
          <div
            className="inline-flex items-center gap-5"
            onClick={() => {
              setActive(displayName);
            }}
          >
            {sideBarItemData[displayName].icon}
            <h1 className="text-xl font-semibold inline-flex justify-between capitalize">
              {sideBarItemData[displayName].main}
            </h1>
          </div>
          {type === "Drop" && (
            <div ref={refContainer}>
              <FaChevronDown className="text-neutral-700 text-xl " />
            </div>
          )}
        </div>
      </div>
      {type === "Drop" && (
        <div
          ref={refContainerDropData}
          className={`h-0 flex-col items-start overflow-hidden space-y-2 mx-3`}
        >
          {Object.keys(sideBarItemData[displayName].sub).map((key) => {
            // const linkToInterface = sideBarItemData[displayName]?.sub[key];
            return (
              <div
                key={key}
                className={cn(
                  "bg-transparent rounded-lg w-full hover:bg-neutral-400/30 p-3 cursor-pointer transition-all ease-in-out hover:text-neutral-900/80 hover:rounded-lg"
                )}
              >
                <h1 className="text-xl font-semibold">{key}</h1>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export { SideBarItem };
