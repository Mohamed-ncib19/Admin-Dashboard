import Barchart from "./BarChart";
import Cards from "./Cards";
import NewCustomers from "./newUsers";
import Piechart from "./SimplePiechart";

const DashboardContent = () => {
  
    return ( 
        <div className="bg-[#D9D9D9]/[0.7] min-h-[90vh] md:w-[80%] w-full m-auto rounded-2xl flex md:flex-row flex-col">
            <div className="flex flex-col md:justify-start md:items-start justify-center items-center w-auto">
            <Barchart />
            <Piechart />
            <NewCustomers />
            </div>
            <Cards />
        </div>
     );
}
 
export default DashboardContent;