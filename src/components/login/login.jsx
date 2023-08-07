import { useNavigate } from "react-router-dom";
import ArrowIcon from "../icons/arrowIcon"
import { motion } from "framer-motion";
import { useState } from "react";
import AdminInfo from "../../assets/js/adminInfo";
const Login = () => {
  const Navigate = useNavigate();
  const [adminName,setAdminName] = useState('');
  const [adminMail,setAdminMail] = useState('');
  return (
    <motion.div
    initial={{opacity:0.7}}
    animate={{opacity:1}}
    transition={{duration:0.6}}
     className="min-h-screen flex justify-center items-center bg-LoginBackgroundImage bg-fixed bg-cover">
      <div
     
       
        className="bg-[#D9D9D9]/[0.6] rounded-2xl h-[60vh] lg:w-[30%] w-[80%]  flex justify-center items-center flex-col gap-6 transition-all duration-500">
        <h1 className="text-[#11364D] text-[30px]">LOGIN</h1>

        <form className="flex justify-center items-center flex-col w-[75%]">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 text-[#11364D] font-semibold tracking-wider w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-[#11364D] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              
              onChange={(e)=>{setAdminName(e.target.value)}}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute font-semibold text-sm text-[#11364D] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Admin Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-[#11364D] font-semibold tracking-wider text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-[#11364D] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e)=>{setAdminMail(e.target.value)}}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm font-semibold text-[#11364D] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-[#11364D] font-semibold tracking-wider text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-[#11364D] focus:outline-none focus:ring-0 focus:border-[#11364D] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm font-semibold text-[#11364D] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>

          <button
            type="submit"
            className="text-white rounded-full bg-[#11364D] hover:bg-[#195074] hover:text-purple-400  focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-2xl lg:w-auto p-4 text-center transition-all duration-500"
            onClick={()=>{
              Navigate('/Welcome')
              AdminInfo.push(adminName);
              AdminInfo.push(adminMail);
            }}
          >
            <ArrowIcon />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
