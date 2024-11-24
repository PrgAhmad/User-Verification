import { FiLogIn } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaApple, FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Registration = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (user.email != "" && user.password != "") {
      alert("Form Submitted");
      formSubmission(user);
      console.log(user);
    } else {
      alert("Fill The Form");
    }
  };

  const formSubmission = async (user) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = "https://sheetdb.io/api/v1/" + apiKey + "/";
    const res = await fetch(url + "search?email=" + user.email);
    const data = await res.json();
    console.log(data);

    if (data.length === 0) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      alert("Acoount Created Successfully!");
    } else {
      alert("Account is Already Exist Please Login!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
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
        to={"/login"}
        className="bg-zinc-50 h-10 w-10 rounded-xl flex items-center justify-center shadow-md"
      >
        <FiLogIn className="text-black text-xl" />
      </NavLink>
      <h1 className="text-black font-bold text-xl">Sign Up</h1>
      <p className="text-zinc-500 text-[0.7rem] text-center font-semibold">
        Make a new doc to bring youe words, data, and teams together. For free
      </p>
      <div className="w-[100%] h-8 flex items-center bg-slate-200 rounded-[10px] px-2">
        <FaUser className="text-zinc-500 text-[0.9rem]" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={(e) => handleInputChange(e)}
          placeholder="First Name"
          required
          autoComplete="off"
        />
      </div>
      <div className="w-[100%] h-8 flex items-center bg-slate-200 rounded-[10px] px-2">
        <FaUser className="text-zinc-500 text-[0.9rem]" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={(e) => handleInputChange(e)}
          placeholder="Last Name"
          autoComplete="off"
        />
      </div>
      <div className="w-[100%] h-8 flex items-center bg-slate-200 rounded-[10px] px-2">
        <MdPhone className="text-zinc-500 text-xl" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          name="phoneNumber"
          type="number"
          value={user.phoneNumber}
          onChange={(e) => handleInputChange(e)}
          placeholder="Phone Number"
          required
          autoComplete="off"
        />
      </div>
      <div className="w-[100%] h-8 flex items-center bg-slate-200 rounded-[10px] px-2">
        <MdEmail className="text-zinc-500 text-xl" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          name="email"
          type="email"
          value={user.email}
          onChange={(e) => handleInputChange(e)}
          placeholder="Email"
          required
          autoComplete="off"
        />
      </div>
      <div
        className="w-[100%] h-9 flex items-center bg-slate-200 rounded-[10px] px-2"
        onClick={handlePass}
      >
        <IoIosLock className="text-zinc-500 text-2xl" />
        <input
          className="w-[100%] bg-slate-200 m-1 h-8 p-2 text-black placeholder:text-[0.7rem] outline-none"
          name="password"
          type={hidden ? "text" : "password"}
          value={user.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Password"
          required
          autoComplete="off"
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
      {/* <NavLink to={"/login"} className="w-[100%]"> */}
      <button
        type="submit"
        className="bg-black text-white w-[100%] h-8 rounded-[0.6rem] text-[0.8rem] hover:bg-slate-800"
      >
        Get Started
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
