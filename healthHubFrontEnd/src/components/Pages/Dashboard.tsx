import { FiChevronsLeft } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { SideBarItem } from "@/components/ui/sideBarItem";
import { useCloseSideBar } from "@/hooks/useEffect/Effect";
import { DashboardContextType } from "@/type";
import { createContext, useState } from "react";
import ContentDashboard from "./Dashboard/ContentDashboard";

const DashboardContext = createContext<DashboardContextType>({
  active: "dashboard",
  setActive: () => {},
});

function Dashboard() {
  const [active, setActive] = useState<string>("dashboard");
  const [close, setClose] = useState<boolean>(false);

  useCloseSideBar(close);
  return (
    <DashboardContext.Provider value={{ active, setActive }}>
      {/* Start Header */}
      <div className="w-full min-h-[100vh] font-Rubik">
        {/* Header */}
        <section
          id="header"
          className="w-full min-h-14 py-5 px-10 inline-flex justify-between bg-neutral-50 shadow-lg"
        >
          <div className="inline-flex gap-3 items-center">
            <img src="/public/HealthHub.svg" alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-manrop font-semibold">HealthHub</h1>
          </div>
          <div className="inline-flex gap-2 items-center">
            <Select>
              <SelectTrigger
                className="w-20 text-xl justify-start gap-1 bg-transparent border-none ring-0 focus:ring-0 focus:ring-offset-0"
                chevronDownIcon={false}
              >
                <TbWorld className="text-xl" />
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-xl" value="En">
                  EN
                </SelectItem>
                <SelectItem className="text-xl" value="Fr">
                  FR
                </SelectItem>
                <SelectItem className="text-xl" value="Es">
                  ES
                </SelectItem>
                <SelectItem className="text-xl" value="De">
                  DE
                </SelectItem>
              </SelectContent>
            </Select>

            <Button variant={"empty"} size={"icon"} className="w-14 h-11">
              <IoMdNotificationsOutline className="text-black text-3xl" />
            </Button>

            <Avatar>
              <AvatarImage src="/xavatario.png" alt="avartar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>
        {/* End Header */}

        {/* Start Content */}
        <section className="w-full bg-neutral-100/80 inline-flex relative">
          {/* Start Side Bar */}
          <div
            className="w-full max-w-[300px] min-h-[calc(100vh-3.5rem)] border-r-2 flex flex-col font-manrop overflow-hidden"
            id="side-bar"
          >
            {/* Dashoard */}
            {/* <div
              className={cn(
                `inline-flex items-center gap-3 text-neutral-900/80 border-b-2 py-5 px-5 cursor-pointer aria-selected:bg-neutral-400/40 aria-selected:text-neutral-900/80 hover:bg-neutral-400/20 hover:text-neutral-900 transition-all ease-in-out text-nowrap`,
                active == "dashboard" && "bg-neutral-400/40 text-neutral-900/80"
              )}
              onClick={() => setActive("dashboard")}
            >
              <FaHome className="text-xl text-neutral-700 font-semibold" />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div> */}
            <SideBarItem type="Single" displayName="dashboard" smallIcon={close} />
            {/* End Dashoard */
            }
            <SideBarItem type="Single" displayName="desktop" smallIcon={close} />
            <SideBarItem
              type="Drop"
              displayName="attendance"
              smallIcon={close}
            />
            <SideBarItem type="Drop" displayName="settings" smallIcon={close} />
            {/* Attendance */}
          </div>
          <div
            className="w-7 h-7 absolute left-[285px] top-1/2 bg-neteurals-300 rounded-full  flex items-center justify-center cursor-pointer"
            onClick={() => {
              setClose(!close);
            }}
            id="side-button"
          >
            <FiChevronsLeft className="text-white text-xl" />
          </div>
          {/* End Side Bar */}
          <ContentDashboard />
        </section>
        {/* End Content */}
      </div>
    </DashboardContext.Provider>
  );
}

export { Dashboard, DashboardContext };

