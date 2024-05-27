export const Registration = () => {
    return (
        <div className={"w-full h-screen overflow-hidden"}>
            <section
                className={"w-1/3 h-screen bg-[#3bb0ef] relative p-10"}>
                <div className={"w-full font-Roboto"}>
                    <div className={"w-full"}>
                        <h1 className={"font-Rubik font-medium text-4xl text-healthHub-300"}>Health<span className={""}>HUB</span></h1>
                    </div>

                </div>
                {/* START Image */}
                <img
                    src="/Backgound/RegistrationDoctor.svg"
                    alt="Doct regist illustartion"
                    className={"absolute -bottom-5 left-5"}
                    height={300}
                    width={300}
                />
                {/* END Image */}

            </section>
        </div>
    );
};
