import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
        <XAxis dataKey={"date"}></XAxis>
        <YAxis allowDecimals={false}></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={"count"} barSize={75} fill="#3b82f6"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
