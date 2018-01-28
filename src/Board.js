// @flow

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  name,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      fontSize="2em"
      dominantBaseline="central"
    >
      {name}
    </text>
  );
};

type Props = {
  labels: string[]
};

const Board = (props: Props) => {
  const data = props.labels.map(name => ({ name, value: 1 }));
  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={"100%"}
          isAnimationActive={false}
          isUpdateAnimationActive={false}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell
              isAnimationActive={false}
              isUpdateAnimationActive={false}
              key={index}
              fill={`hsla(${index / data.length * 360}, 100%, 50%, 0.5)`}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Board;
