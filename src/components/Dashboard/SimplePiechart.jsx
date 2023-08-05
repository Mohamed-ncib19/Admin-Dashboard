import { PieChart, Pie,Legend, Tooltip } from 'recharts';

const Piechart = () => {
  const data01 = [
    { name: 'Product 1', value: 400 },
    { name: 'Product 2', value: 300 },
    { name: 'Product 3', value: 300 },
    { name: 'Product 4', value: 200 },
    { name: 'Product 5', value: 278 },
    { name: 'Product 6', value: 189 },
  ];
    return ( 
      <div className='flex justify-start items-start float-left bg-gray-200/[0.6] rounded-3xl m-2'>
      <PieChart width={400} height={400}>
      <Legend width={100}  />

        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data01}
          
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#195073"
          label
        />
        
        <Tooltip />
      </PieChart>
      </div>
    );
}
 
export default Piechart;