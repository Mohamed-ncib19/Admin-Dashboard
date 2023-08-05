import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: '2020',
    USA: 4000,
    MENA: 6000,
    ASIA: 4000,
  },
  {
    name: '2021',
    USA: 3000,
    MENA: 1398,
    ASIA: 3500,
  },
  {
    name: '2022',
    USA: 2000,
    MENA: 9800,
    ASIA: 5000,
  },
  {
    name: '2023',
    USA: 2780,
    MENA: 3908,
    ASIA: 4000,
  }
];

const Barchart = () => {
  return (
    <div className=' w-full'>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#54C6EC' }} />
        <Legend width={100} wrapperStyle={{ top: 10, right: 20, borderRadius: 3 }} />

        <Bar dataKey="MENA" fill="#9A55FF" />
        <Bar dataKey="USA" fill="#FE9296" />
        <Bar dataKey="ASIA" fill="#54C6EC" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default Barchart;
