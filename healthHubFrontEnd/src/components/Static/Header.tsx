import {Button} from "@/components/ui/button.tsx";
import {HiArrowNarrowRight} from "react-icons/hi";

export const Header = () => {
    return (
        <nav className={"w-full max-h-40 flex flex-row justify-between items-center px-16 font-Rubik mb-10"}>
            {/* Start Logo */}
            <div>
                <h1
                    className={"text-3xl font-normal text-healthHub-100 capitalize"}
                >Health<span className={"text-healthHub-200 capitalize"}>HUB</span></h1>
                {/* End Logo */}
            </div>
            <div>
                <ul className={"flex gap-5 text-base font-semibold cursor-pointer text-healthHub-black/60"}>
                    <li
                        className={"aria-disabled:text-healthHub-black transition-all ease-in-out "}
                        aria-disabled={true}
                    >Home
                    </li>
                    <li
                        className={"hover:text-healthHub-black transition-all ease-in-out"}
                        aria-disabled={true}
                    >Product
                    </li>
                    <li
                        className={"hover:text-healthHub-black transition-all ease-in-out"}
                        aria-disabled={true}
                    >Pricing
                    </li>
                    <li
                        className={"hover:text-healthHub-black transition-all ease-in-out"}
                        aria-disabled={true}
                    >Contact
                    </li>
                </ul>
            </div>
            <div className={"min-w-52 flex gap-5 tracking-wider"}>
                <Button
                    variant={"outline"}
                    className={" font-bold hover:bg-healthHub-800/10 gap-1 text-base uppercase p-5 border-none"}
                >
                    Login
                </Button>
                <Button
                    className={"font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase p-5"}
                    size={"sm"}
                >Join Us <HiArrowNarrowRight size={"20px"}/>
                </Button>
            </div>
        </nav>
    );
};
