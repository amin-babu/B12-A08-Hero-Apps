import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const Recharts = ({ ratings = [] }) => {

  const sortedRatings = [...ratings].sort((a, b) => {
    return parseInt(b.name) - parseInt(a.name);
  });

  return (
    <div className='overflow-auto' style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={sortedRatings}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811">
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recharts;
