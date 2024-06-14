import { Button } from "@/components/ui/button.tsx";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  let isShown: boolean = false;

  useEffect(() => {
    checkHeader();
  }, [location, checkHeader()]);

  // Check if the URL has Registration or login
  function checkHeader() {
    const ListHide = ["/Registration", "/Login"];
    isShown = !ListHide.includes(location.pathname);
    console.log(isShown);
  }

  return (
    <nav
      className={`absolute left-10  w-[calc(100vw-10%)] max-h-40 flex-row justify-between items-center px-16 py-10 font-manrop  mb-10 mx-auto  ${
        isShown ? "flex" : "hidden"
      }`}
    >
      {/* Start Logo */}
      <div>
        <h1 className={"text-3xl font-normal text-healthHub-100 capitalize font-Roboto"}>
          Health<span className={"text-healthHub-200 capitalize"}>HUB</span>
        </h1>
        {/* End Logo */}
      </div>
      {/* End Logo */}
      {/* Start Navigation */}
      <div>
        <ul
          className={
            "flex gap-5 font-semibold cursor-pointer text-healthHub-black/90 text-xl"
          }
        >
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={true}
          >
            Home
          </li>
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={false}
          >
            Services
          </li>
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={false}
          >
            Find Doctors
          </li>
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={false}
          >
            About Us
          </li>
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={false}
          >
            Blog
          </li>
          <li
            className={
              "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
            }
            aria-disabled={false}
          >
            Contact us
          </li>
        </ul>
      </div>
      {/* End Navigation */}

      {/* Start Buttons */}
      <div className={"min-w-52 flex items-center gap-5 tracking-wider"}>
        <Link to={"/Registration"}>
          <Button
            className={
              "font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase px-7 py-6"
            }
            size={"sm"}
          >
            Join Us
          </Button>
        </Link>
      </div>
      {/* End Buttons */}
    </nav>
  );
};
