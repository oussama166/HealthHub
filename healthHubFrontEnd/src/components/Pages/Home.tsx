import Hero from "../Static/Home/Hero";
import OurServices from "../Static/Home/OurServices";
import { Button } from "../ui/button";

export const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <section className="bg-heroGradient container-center rounded-xl ring-2 ring-blues-500/20 p-16 space-y-10 px-20">
        <h1 className="text-center text-3xl font-semibold capitalize">
          <span className="gradient-text">HealthHub Story</span> got to know us
        </h1>
        <div className="flex flex-row  items-start gap-10">
          <img src="/doc2.svg" alt="" className="w-full h-full " />
          <div className="space-y-5">
            <p className="max-w-[85%] text-xl text-neutral-500 leading-normal text-balance">
              HealthHb is more than just an online medical service; it’s a
              movement towards accessible, efficient, and compassionate
              healthcare for all. Founded by a team of visionary doctors,
              healthcare professionals, and technology experts, we are driven by
              the mission to deliver exceptional medical care directly to you,
              no matter where you are. Our platform is built on the pillars of
              trust, innovation, and patient-centricity, ensuring that every
              interaction is personalized and every treatment plan is tailored
              to your unique needs. With a network of licensed practitioners
              from diverse medical fields, we guarantee comprehensive care
              that’s just a click away.
            </p>
            <Button
              variant={"secondary"}
              className=" bg-blues-500 text-white p-8 hover:bg-blues-600 text-2xl font-bold rounded-xl"
              size={"lg"}
            >
              Learn more about us
            </Button>
          </div>
        </div>
      </section>
      <section className="container-center  space-y-10 px-20">
        <h1 className="text-center ">
          Reach our <span className="gradient-text">Help Desk </span>for support
        </h1>
      </section>
    </>
  );
};
