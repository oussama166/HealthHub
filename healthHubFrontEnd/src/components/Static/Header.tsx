import {Button} from "@/components/ui/button.tsx";
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

export const Header = () => {
    const location = useLocation();
    let isShown: boolean = false;

    useEffect(() => {
        checkHeader();
    }, [location, checkHeader()]);

    // Check if the URL has Registration or login
    function checkHeader() {
        const ListHide = ["/Registration", "/Login"]
        isShown = !ListHide.includes(location.pathname);
        console.log(isShown);
    }

    return (
        <nav
            className={`w-full max-h-40 flex-row justify-between items-center px-16 py-10 font-Rubik mb-10 ${isShown ? "flex" : "hidden"}`}>
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
                <Link to={"/Registration"}>
                    <Button
                        className={"font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase p-5"}
                        size={"sm"}
                    >Join Us <HiArrowNarrowRight size={"20px"}/>
                    </Button>
                </Link>
            </div>
        </nav>
    );
};
