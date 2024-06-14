import {
  FaAmazon,
  FaApple,
  FaChevronRight,
  FaGoogle,
  FaSlack,
  FaSpotify,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { SiNotion } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Input } from "../ui/input";

export const Home = () => {
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
      {/* Send book ampoienent */}
      <div className="relative w-[calc(100vw-10%)] bg-white border-2 border-blues-500/20 space-y-5 px-10 py-12 z-30 mx-auto rounded-xl">
        <h1 className="text-3xl text-blues-700 font-semibold  ">
          Easily book an appointment in 4 simple steps
        </h1>
        <div className="w-full inline-flex gap-5 items-center justify-between">
          <div className="text-xl w-full">
            <h1 className="text-neutral-500 inline-flex items-center justify-center gap-2">
              <MdEmail size={25} className="text-blues-500" />
              Email Address
            </h1>
            <Input placeholder="Enter your email address" className="w-full" />
          </div>
          
        </div>
      </div>
      {/* Send book ampoienent */}
    </>
  );
};
