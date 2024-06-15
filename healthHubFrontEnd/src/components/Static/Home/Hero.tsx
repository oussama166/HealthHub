import {
  FaAmazon,
  FaApple,
  FaCheckCircle,
  FaChevronRight,
  FaGoogle,
  FaSlack,
  FaSpotify,
} from "react-icons/fa";
import { FaPhoneFlip, FaUserDoctor } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiNotion } from "react-icons/si";

import { useState } from "react";
import { format } from "date-fns";

import {speciality} from "@/manifest.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Hero() {
  const [date, setDate] = useState<Date>();
  return (
    <>
      <div className="min-h-lvh bg-heroGradient pt-40 px-24">
        {/* Start Hero  */}
        <section className="w-full flex flex-row gap-5">
          <div className="w-1/2 flex flex-col gap-10">
            {/* Start Title of the hero  */}
            <h1 className="text-5xl font-semibold leading-snug capitalize">
              Your <span className="gradient-text">trusted partner</span> <br />{" "}
              in digital healthcare.
            </h1>
            {/* End Title of the hero  */}
            {/* Start para */}
            <p className="text-xl font-normal leading-normal">
              <span className="text-blues-500">Empowering Your Health </span>at
              Every Step. Experience personalized medical care from the comfort
              of your home. Connect with{" "}
              <span className="text-blues-500">certified doctors</span>, or
              manage prescriptions, and schedule appointments with ease. Ready
              to take control of your health?{" "}
              <a className="text-blues-500 cursor-pointer" href="/">
                Get Started
              </a>{" "}
              or{" "}
              <a className="text-blues-500 cursor-pointer" href="/">
                Book an Appointment today.
              </a>
            </p>
            {/* End para */}
            {/* Start Button fo Booking appe */}
            <Button
              variant={"outline"}
              size={"lg"}
              className="w-1/2 bg-gradient-to-r from-[#98ddff] to-[#0095DE] text-white text-xl p-8 gap-5 hover:text-white"
            >
              Book an appointment <FaChevronRight />
            </Button>
            <div className="space-y-5">
              <h1 className="text-xl text-[#4c4c4d] font-semibold">
                Trusted by thousands of doctors and millions of patients :
              </h1>
              <div className="inline-flex gap-5 items-center justify-between ">
                <FaAmazon size={35} className="text-[#4c4c4d]" />
                <FaApple size={35} className="text-[#4c4c4d]" />
                <FaGoogle size={35} className="text-[#4c4c4d]" />
                <SiNotion size={35} className="text-[#4c4c4d]" />
                <FaSpotify size={35} className="text-[#4c4c4d]" />
                <FaSlack size={35} className="text-[#4c4c4d]" />
              </div>
            </div>
            {/* End Button fo Booking oppe */}
          </div>
          <div className="w-1/2 flex items-center justify-center relative">
            <img src="/doc1.png" alt="doc1" />
            <img
              src="/testo.svg"
              alt="testo 1"
              className="absolute -bottom-20 translate-x-24 z-20"
            />
            <img
              src="/positivePoint.svg"
              alt="positive point"
              className="absolute bottom-28 -translate-x-52  z-20"
            />
            <img
              src="/rates.svg"
              alt="rates"
              className="absolute bottom-28 translate-x-52 z-20"
            />
          </div>
        </section>
        {/* End Hero */}
      </div>

      {/* Start Line */}
      <img
        src="bgAsserts/Line.svg"
        alt="line"
        className="absolute top-80  w-full z-10"
      />
      {/* End Line  */}
      {/* Start Point */}
      <img
        src="/bgAsserts/points.svg"
        alt="points"
        className="absolute top-[1000px] right-5 w-[200px] z-10"
      />
      {/* End Point */}
      {/* Send book ampoienent */}
      <div className="relative w-[calc(100vw-10%)] bg-white border-2 border-blues-500/20 space-y-10 px-10 py-12 z-30 mx-auto rounded-xl shadow-sm">
        <h1 className="text-3xl text-blues-700 font-semibold  ">
          Easily book an appointment in 4 simple steps
        </h1>
        <div className="w-full inline-flex gap-5 items-center justify-between">
          {/* Start Input  */}
          <div className="text-xl w-full space-y-4">
            <h1 className="text-neutral-400 inline-flex items-center justify-center gap-2">
              <MdEmail size={25} className="text-blues-500" />
              Email Address
            </h1>
            <Input
              placeholder="Enter your email address"
              className="w-full py-8 px-4 text-xl ring-offset-blue-500 rounded-lg
             focus-visible:ring-1 focus-visible:ring-blues-500"
              type="email"
            />
          </div>
          {/* End Input  */}
          {/* Start Input  */}
          <div className="text-xl w-full space-y-4">
            <h1 className="text-neutral-400 inline-flex items-center justify-center gap-2">
              <FaPhoneFlip size={25} className="text-blues-500 rotate-90" />
              Phone Number
            </h1>
            <Input
              placeholder="Enter your phone number"
              className="w-full py-8 px-4 text-xl ring-offset-blue-500
             focus-visible:ring-1 focus-visible:ring-blues-500"
              type="tel"
              pattern="[0-9+-]*"
            />
          </div>
          {/* End Input  */}
          {/* Start Input  */}
          <div className="text-xl w-full space-y-4">
            <h1 className="text-neutral-400 inline-flex items-center justify-center gap-2">
              <IoCalendarNumberSharp size={25} className="text-blues-500 " />
              Date of Appointment
            </h1>
            <Popover>
              <PopoverTrigger className="w-full">
                <Input
                  placeholder="Select the date of the appointment"
                  className="w-full py-8 px-4 text-xl ring-offset-blue-500 focus-visible:ring-1 focus-visible:ring-blues-500"
                  value={date ? format(date?.toString(), "PPP") : ""}
                />
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* End Input  */}

          {/* Start Input  */}
          <div className="text-xl w-full space-y-4">
            <h1 className="text-neutral-400 inline-flex items-center justify-center gap-2">
              <FaUserDoctor size={25} className="text-blues-500 " />
              Specialty
            </h1>
            <Select>
              <SelectTrigger className="w-full py-8 px-4 text-xl ring-offset-blue-500 focus-visible:ring-1 focus-visible:ring-blues-500">
                <SelectValue
                  placeholder="Internal Medicine"
                  defaultValue={"Internal Medicine"}
                />
              </SelectTrigger>
              <SelectContent>
                {speciality.map((item, index) => (
                  <SelectItem className="text-xl" key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* End Input  */}
          {/* Start Validate  */}
          <div className="text-xl w-1/2 mt-12">
            <Button
              variant={"outline"}
              size={"lg"}
              className="w-full bg-[#0095DE] text-white text-xl p-8 gap-5 hover:text-white rounded-xl hover:bg-blues-500/90"
            >
              Book now <FaCheckCircle />
            </Button>
          </div>
          {/* End Validate  */}
        </div>
      </div>
      {/* Send book ampoienent */}
    </>
  );
}

export default Hero;
