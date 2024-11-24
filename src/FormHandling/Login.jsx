import { FiLogIn } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaApple, FaEyeSlash, FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    if (email != "" && password != "") {
      e.preventDefault();
      console.log("email is :", email);
      console.log("password is :", password);
      formValidation(email, password);
    } else {
      alert("Fill The Form");
    }
  };

  const formValidation = async (email, password) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url =
      "https://sheetdb.io/api/v1/" + apiKey + "/search?email=" + email;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setEmail("");
    setPassword("");
    if (data.length === 0) {
      alert("Please Create Your Account");
    } else if (data[0]?.password === password) {
      alert("Login SuccesFully");
      console.log(data[0]);
      localStorage.setItem("User Details", JSON.stringify(data[0]));
      window.location.replace("/dashboard");
    }
  };

  const [hidden, setHidden] = useState(false);
  const handlePass = (e) => {
    if (e.target.classList[0] === "eye") {
      setHidden(!hidden);
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="bg-transparent w-[20rem] h-auto rounded-3xl flex justify-center flex-col items-center p-6 shadow-2xl gap-2"
    >
      <NavLink
        to="/"
        className="bg-zinc-50 h-10 w-10 rounded-xl flex items-center justify-center shadow-md"
      >
        <FiLogIn className="text-black text-xl" />
      </NavLink>
      <h1 className="text-black font-bold text-xl">Sign in with email</h1>
      <p className="text-zinc-500 text-[0.7rem] text-center font-semibold">
        Make a new doc to bring youe words, data, and teams together. For free
      </p>
      <div className="w-[100%] h-8 flex items-center bg-slate-200 rounded-[10px] px-2">
        <MdEmail className="text-zinc-500 text-xl" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          placeholder="Email"
        />
      </div>
      <div
        className="w-[100%] h-9 flex items-center bg-slate-200 rounded-[10px] px-2"
        onClick={handlePass}
      >
        <IoIosLock className="text-zinc-500 text-2xl" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          type={hidden ? "text" : "password"}
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {hidden ? (
          <TbEye className="eye text-zinc-500 text-2xl" />
        ) : (
          <TbEyeClosed className="eye text-zinc-500 text-2xl" />
        )}
      </div>
      <p className="text-zinc-500 text-[0.6rem] font-semibold self-end">
        Forgot password?
      </p>
      {/* <NavLink to={"/dashboard"} className={"w-[100%]"}> */}
      <button
        type="submit"
        className="bg-black text-white w-[100%] h-8 rounded-[0.6rem] text-[0.8rem] hover:bg-slate-800"
      >
        {/* <NavLink to={"/dashboard"} className={"w-[100%]"}> */}
        Get Started
        {/* </NavLink> */}
      </button>
      {/* </NavLink> */}
      <p className="text-gray-500 text-[0.7rem]">Or sign in with</p>
      <div className="w-full h-9 flex justify-between items-center">
        <span
          className="h-8 shadow w-[4.7rem] rounded-md grid place-items-center hover:bg-slate-50 cursor-pointer"
          onClick={() => window.open("https://www.google.com", "_blank")}
        >
          <FcGoogle className="text-xl" />
        </span>
        <span
          className="h-8 shadow w-[4.7rem] rounded-md grid place-items-center hover:bg-slate-100 cursor-pointer"
          onClick={() => window.open("https://www.facebook.com", "_blank")}
        >
          <RiFacebookCircleFill className="text-xl text-[blue]" />
        </span>
        <span
          className="h-8 shadow w-[4.7rem] rounded-md grid place-items-center hover:bg-slate-50 cursor-pointer"
          onClick={() => window.open("https://www.apple.com", "_blank")}
        >
          <FaApple className="text-xl text-black" />
        </span>
      </div>
    </form>
  );
};
