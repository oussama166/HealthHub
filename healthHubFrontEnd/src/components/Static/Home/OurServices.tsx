
import Card from "@/components/ui/Card";
import { Services } from "@/manifest.json";


function OurServices() {
  return (
    <>
      <section className="mt-20 w-[calc(100vw-10%)] mx-auto space-y-5">
        {/* Start Header  */}
        <h1 className="text-4xl text-center font-semibold">
          Top <span className="gradient-text">service</span> we offer
        </h1>
        <p className="text-xl text-neutral-400 text-balance text-center leading-normal">
          In today’s fast-paced world, your health deserves the utmost attention
          and convenience. That’s why HealNet offers a suite of integrated
          services designed to cater to your healthcare needs digitally :
        </p>
        {/* End Header  */}

        {/* Start Cards */}
        <div className="w-[calc(100vw-30%)] grid grid-cols-3 gap-10 p-20 mx-auto relative">
          <img
            src="/bgAsserts/Waves.svg"
            alt="waves1"
            className="absolute top-16"
          />
          <img
            src="/bgAsserts/Waves.svg"
            alt="waves2"
            className="absolute bottom-16 right-10"
          />

          {Services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.link}
              gap={index == 0 ? 2 : 1}
            />
          ))}
        </div>
        {/* End Cards */}
      </section>
    </>
  );
}

export default OurServices;
