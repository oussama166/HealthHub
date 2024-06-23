import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  columnsConsultation,
  scheduleConsultation,
} from "@/components/ui/columns";
import { DataTable } from "@/components/ui/datatable";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { BiCalendarCheck } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoCameraOutline, IoInformation } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { PiWalletBold } from "react-icons/pi";
import { staticStyle } from "./DashboardItem";

// Getting the data from the manifest

import { AuthContext } from "@/App";
import { dataJobDesk } from "@/manifest.json";
import { Doctor, JobDeskItemProps } from "@/type";
import { useContext, useEffect, useState } from "react";

function Jobdesk() {
  const { user } = useContext(AuthContext);
  const [doc, setDoc] = useState<Doctor | null>(null);

  useEffect(() => {
    if (user != null) {
      setDoc(JSON.parse(user));
      // console.log(JSON.parse(user));
    }
  }, [user]); // Incluez 'user' dans le tableau des dépendances

  return (
    <>
      <section
        className={`w-full h-screen p-5 flex flex-col gap-5 overflow-y-auto`}
      >
        {/* Title of the screen */}
        {/* BreadCrumb */}
        {/* eg : Home > More > Components > Breadcrumb */}
        <h1 className="text-2xl font-sans font-semibold text-neutral-950 w-full ">
          Job Desk
        </h1>
        <div className="w-full flex flex-row gap-5">
          {/* Start Content */}
          <section
            className={cn(
              staticStyle.section,
              `max-w-[30%] max-h-[100vh] p-10 flex-col items-start justify-start gap-5 rounded-lg  `
            )}
          >
            {/* Start Info about doc  */}
            <section id="docInfo" className="flex flex-row gap-5 mx-auto">
              <Avatar className="w-14 h-14">
                <AvatarImage src="/public/xavatario.png" />
                <AvatarFallback>DO</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">{doc?.name}</h1>
                <p className="text-xl font-normal text-neteurals-300 lowercase">
                  {doc?.specialty}
                </p>
              </div>
            </section>
            {/* End Info about doc  */}

            {/* Start Info   */}
            <section className="space-y-5">
              <h1 className="text-xl font-medium leading-4 tracking-wide">
                Info
              </h1>
              <section className="space-y-5">
                <JobDeskItemComp
                  fill
                  title="Speciality"
                  info={doc?.specialty || "No Specialty"}
                  icon={<IoInformation className="text-3xl text-black" />}
                />
                <JobDeskItemComp
                  fill
                  title="Sallary"
                  info={`$${doc?.price}`}
                  infoClassName="text-xl font-semibold text-green-600"
                  icon={<PiWalletBold className="text-3xl text-black" />}
                />
                <JobDeskItemComp
                  fill
                  title="Office Assistance"
                  info="On"
                  infoClassName="text-xl font-semibold text-green-600"
                  icon={
                    <HiOutlineOfficeBuilding className="text-3xl text-black" />
                  }
                />
                <JobDeskItemComp
                  fill
                  title="Camera Assistance"
                  info="Off"
                  infoClassName="text-xl font-semibold text-green-600"
                  icon={<IoCameraOutline className="text-3xl text-black" />}
                />
                <JobDeskItemComp
                  fill
                  title="joining Date"
                  info={format(
                    new Date(doc?.joinDate || "10/10/2002"),
                    "MMMM dd, yyyy"
                  )}
                  icon={<BiCalendarCheck className="text-3xl text-black" />}
                />
              </section>
            </section>
            {/* End Info   */}

            {/* Start Contact   */}
            <section className="space-y-5">
              <h1 className="text-xl font-medium leading-4 tracking-wide">
                Contact
              </h1>
              <section className="space-y-5">
                <JobDeskItemComp
                  fill={false}
                  info="Email"
                  title={doc?.email || "No Email"}
                  icon={
                    <MdOutlineMailOutline className="text-3xl text-black" />
                  }
                />
                <JobDeskItemComp
                  fill={false}
                  info="Phone"
                  title={"No Phone"}
                  icon={<MdOutlinePhone className="text-3xl text-black" />}
                />
              </section>
            </section>
            {/* End Contact   */}
          </section>
          {/* End Content */}

          <section
            className={cn(
              staticStyle.section,
              `w-full max-w-[70%] p-10 flex-col items-start gap-5 rounded-lg `
            )}
          >
            <h1 className="text-xl font-semibold">
              Schedule of the office day
            </h1>
            <DataTable
              data={dataJobDesk as scheduleConsultation[]}
              columns={columnsConsultation}
              usePagination={true}
            />

            <h1 className="text-xl font-semibold">
              Schedule of the online day
            </h1>
            <DataTable
              data={dataJobDesk as scheduleConsultation[]}
              columns={columnsConsultation}
            />
          </section>
        </div>
        {/* End Title of the screen */}
      </section>
    </>
  );
}

const JobDeskItemComp: React.FC<JobDeskItemProps> = ({
  fill,
  title,
  titleClassName,
  info,
  infoClassName,
  icon,
}) => {
  return (
    <div className="w-full flex flex-row gap-5 overflow-hidden">
      {/* Icon  */}
      <div
        className={cn(
          !fill ? `bg-transparent` : `bg-neutral-100`,
          `flex items-center justify-center rounded-lg w-12 h-12`
        )}
      >
        {icon as React.ReactNode}
      </div>
      {/* End Icon  */}
      {/* Title  */}
      <div>
        <h1 className={cn("text-xl font-medium tracking-wider", infoClassName)}>
          {info}
        </h1>
        {/* End Title  */}
        {/* Info  */}
        <p
          className={cn("text-lg font-normal text-neutral-400", titleClassName)}
        >
          {title}
        </p>
        {/* End Info  */}
      </div>
    </div>
  );
};

export default Jobdesk;
