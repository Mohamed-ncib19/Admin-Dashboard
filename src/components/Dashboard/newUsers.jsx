import { LineChart, Line } from 'recharts';
import UserIcon from '../icons/userIcon';

const NewCustomers = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return ( 
        <div className='bg-gray-200/[0.5] flex flex-col justify-center items-center m-2 p-4 rounded-3xl w-full'>
          <div className='flex flex-col justify-center items-center text-[2rem] text-gray-700'>
            <UserIcon />
            <p>1,526</p>
            <h1>new customers</h1>
            </div>
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#0F6BA5" strokeWidth={2} />
       
        </LineChart>
        </div>
     );
}
 
export default NewCustomers;