import { FaDesktop, FaCog, FaRegClock, FaChevronDown } from "react-icons/fa";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const sideBarStyle = cva(
  "inline-flex items-center gap-3 text-neutral-900/80  py-4 px-5 cursor-pointer  aria-selected:bg-neutral-400/40 aria-selected:text-neutral-900/80 hover:bg-neutral-400/20 hover:text-neutral-900 transition-all ease-in-out",
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

const sideBarItemData = {
  displayName: {
    desktop: {
      main: "Job desk work",
      icon: <FaDesktop />,
    },
    attendance: {
      main: "attendance",
      sub: {
        "Daily log": "/dailyLog",
        Request: "/request",
        Details: "/details",
        Summary: "/summary",
      },
      icon: <FaRegClock />,
    },
    settings: {
      main: "settings",
      sub: {
        Profile: "/profile",
        Password: "/password",
        Payment: "/payment",
      },
      icon: <FaCog />,
    },
  },
};

interface sideBarItemProps {
  type: "Drop" | "Single";
  displayName: "desktop" | "attendance" | "settings";
}

// Using gsap fo animation to accoridion
gsap.registerPlugin(useGSAP);

function SideBarItem({ type, displayName }: sideBarItemProps) {
  return (
    <div className={cn(sideBarStyle())}>
      <div className="w-full inline-flex items-center gap-3 " >
        {sideBarItemData["displayName"][displayName].icon}
        <h1 className="text-xl font-semibold inline-flex justify-between">
          {sideBarItemData["displayName"][displayName].main}
        </h1>
        {type === "Drop" && (
          <FaChevronDown className="text-neutral-700 text-xl ml-10 mt-2" />
        )}
      </div>
      {type === "Drop" && <div></div>}
    </div>
  );
}

export { SideBarItem };
