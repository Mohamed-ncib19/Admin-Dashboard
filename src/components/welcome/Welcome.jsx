import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminInfo from "../../assets/js/adminInfo";
const Welcome = () => {
    const Navigate = useNavigate();
    return ( 
        <motion.div
                initial={{opacity:0.7}}
                animate={{opacity:1}}
            
                transition={{duration:0.8}}
                className="bg-WelcomeBackgroundImage min-h-screen bg-fixed bg-cover flex justify-center items-center text-center">
            <motion.h1
           
            animate={{y:[-200,50,0]}}
            exit={{y:300}}
            transition={{duration:0.7,delay:0.1}}
            className="text-[70px] text-[#2C8CC9]">Welcome Back, <span className="text-white">{AdminInfo[0]}</span> </motion.h1>
            
           {
            setTimeout(()=>{
                Navigate('/Dashboard')
            },2000)
           }
        </motion.div>
     );
}
 
export default Welcome;