import { motion } from "framer-motion";
import UserSection from "../userSecction/userSection";
 import DashboardContent from "./DashboardContent";
 const Dashboard = () => {
    return ( 
        <motion.div
          initial={{opacity:0.7}}
          animate={{opacity:1}}
          transition={{duration:0.2}}
          className="bg-DashboardBackgroundImage bg-fixed bg-cover min-h-screen flex flex-col ">
            <UserSection />
            <DashboardContent />
        </motion.div>
     );
}
 
export default Dashboard;