import Stats  from "../icons/stats";
import Orders from "../icons/ordersIcons";
import UserIcon from '../icons/userIcon'

const Cards = () => {
    return ( 
        <div className=" flex flex-col justify-start md:items-end items-center w-full gap-6 m-2">
            
            <div className="bg-[#195073] w-[50%] h-[40vh] p-8 rounded-2xl space-y-7">
                <div className="flex flex-row justify-between text-[#FFFFFF] text-[1.5rem]">
                    <h2>Weekly Sales</h2>
                    <Stats />
                </div>
                <h1 className=" text-[2rem] text-[#FFFFFF]">$10,547.38</h1>
            </div>

            <div className="bg-[#195073] w-[50%] h-[40vh] p-8 rounded-2xl space-y-7">
                <div className="flex flex-row justify-between text-[#FFFFFF] text-[1.5rem]">
                    <h2>Weekly Orders</h2>
                    <Orders />
                </div>
                <h1 className=" text-[2rem] text-[#FFFFFF]">$10,547.38</h1>
            </div>

            <div className="bg-[#195073] w-[50%] h-[40vh] p-8 rounded-2xl space-y-7">
                <div className="flex flex-row justify-between text-[#FFFFFF] text-[1.5rem]">
                    <h2>Customers Online</h2>
                    <UserIcon />
                </div>
                <h1 className=" text-[2rem] text-[#FFFFFF]">$10,547.38</h1>
            </div>
        </div>
     );
}
 
export default Cards;