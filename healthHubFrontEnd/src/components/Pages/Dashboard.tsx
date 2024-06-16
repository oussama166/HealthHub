import { FaHome } from "react-icons/fa";
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

function Dashboard() {
  return (
    <>
      {/* Start Header */}
      <div className="w-full min-h-[100vh]">
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
                className="w-20 text-xl justify-start gap-1 border-none ring-0 focus:ring-0 focus:ring-offset-0"
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
        <section className="w-full bg-neutral-100/50 inline-flex">
          {/* Start Side Bar */}
          <div className="w-full max-w-[300px] h-[calc(100vh-3.5rem)] border-r-2 flex flex-col font-manrop">
            {/* Dashoard */}
            <div
              className="inline-flex items-center gap-3 text-neutral-900/80 border-b-2 py-5 px-5 cursor-pointer
               aria-selected:bg-neutral-400/40 aria-selected:text-neutral-900/80
               hover:bg-neutral-400/20 hover:text-neutral-900
               transition-all ease-in-out
               "
            >
              <FaHome className="text-xl text-neutral-700 font-semibold" />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            {/* End Dashoard */}
            <SideBarItem type="Drop" displayName="desktop" />
            <SideBarItem type="Single" displayName="attendance" />
            <SideBarItem type="Single" displayName="settings" />
            {/* Attendance */}
          </div>
          {/* End Side Bar */}
        </section>
        {/* End Content */}
      </div>
    </>
  );
}

export default Dashboard;
