import { AuthContext } from "@/App";
import { AuthContextType, signDoc } from "@/type";
import { useContext, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { signAsDoctorOrPatient } from "@/api/Medecin";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const context: AuthContextType = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDoc, setIsDoc] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: signDoc = {
      email: email,
      password: password,
      isDoctor: isDoc,
    };
    context.setIsLogged(await signAsDoctorOrPatient(data));
    if (context.isLogged) {
      const userType = context.typeUser;
      if (userType == "Doctor") {
        navigate("/Dashboard");
      } else {
        navigate("/FindDoctors");
      }
    }
  };

  return (
    <div className="font-[sans-serif] h-screen bg-white text-black  flex">
      {/* Image Section */}
      <section className="w-full  bg-[#3bb0ef] relative p-10">
        <div className="w-full font-Roboto">
          <div className="w-full">
            <h1 className="font-Rubik font-medium text-4xl text-healthHub-300">
              Health<span>HUB</span>
            </h1>
          </div>
        </div>
        {/* START Image */}
        <img
          src="/Backgound/RegistrationDoctor.svg"
          alt="Doctor registration illustration"
          className="absolute bottom-5 left-5"
          height={300}
          width={300}
        />
        {/* END Image */}
      </section>

      {/* Form Section */}
      <div className="w-full flex items-center md:p-8 p-6  h-full lg:w-11/12 lg:ml-auto">
        <form className="max-w-lg w-full mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-healthHub-300">Login</h3>
          </div>
          <div className="mt-10">
            <label className="text-xs block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-healthHub-700 px-2 py-3 outline-none"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {
                  setEmail(JSON.parse(context.user).email);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z"></path>
                  </clipPath>
                </defs>
                <g
                  clipPath="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  ></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="mt-10">
            <label className="text-xs block mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-healthHub-700 px-2 py-3 outline-none"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => {
                  setPassword(JSON.parse(context.user).password);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-10">
            <Checkbox
              id="terms"
              className="border-black/20  data-[state=checked]:bg-blues-500 data-[state=checked]:text-white cursor-pointer"
              onClick={() => setIsDoc(!isDoc)}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              You want to connect as Doctor?
            </Label>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-healthHub-700 border border-healthHub-700 focus:outline-none"
              onClick={onSubmit}
            >
              Login
            </button>
            <p className="text-sm mt-8">
              You don't have an account?{" "}
              <a
                href="javascript:void(0);"
                className="text-healthHub-700 font-semibold hover:underline ml-1"
              >
                Create account here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
