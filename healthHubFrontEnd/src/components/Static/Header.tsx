import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button.tsx";
import { useHeaderVisibility, useScrollEffect } from "@/hooks/useEffect/Effect";
import { AuthContextType } from "@/type";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  useScrollEffect();
  const isShown = useHeaderVisibility();
  const context: AuthContextType = useContext(AuthContext);
  const { isLogged } = context;
  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);
  return (
    <nav
      className={`absolute left-10  w-[calc(100vw-10%)] max-h-40 flex-row justify-between items-center px-16 py-10 font-manrop  mb-10 mx-auto z-50  ${
        isShown ? "flex" : "hidden"
      }`}
      id="pin-header"
    >
      {/* Start Logo */}
      <div>
        <h1
          className={
            "text-3xl font-normal text-healthHub-100 capitalize font-Roboto"
          }
        >
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
          <Link to={"/FindDoctors"}>
            <li
              className={
                "hover:text-blues-500  aria-disabled:text-blues-500 transition-all ease-in-out "
              }
              aria-disabled={false}
            >
              Find Doctors
            </li>
          </Link>
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
        {isLogged ? (
          <>
            <Link to={"/Dashboard"}>
              <Button
                className={
                  "font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase px-7 py-6"
                }
                size={"sm"}
              >
                Dashboard
              </Button>
            </Link>
            <Link to={"/Login"}>
              <Button
                className={
                  "font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase px-7 py-6"
                }
                onClick={() => {
                  context.setIsLogged(false);
                }}
                size={"sm"}
              >
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/Login"}>
              <Button
                className={
                  "font-bold bg-healthHub-700 text-primary-foreground hover:bg-healthHub-700/90 gap-1 text-base uppercase px-7 py-6"
                }
                size={"sm"}
              >
                Login
              </Button>
            </Link>
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
          </>
        )}
      </div>
      {/* End Buttons */}
    </nav>
  );
};
