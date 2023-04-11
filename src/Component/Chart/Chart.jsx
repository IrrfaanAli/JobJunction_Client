import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";




  const data = [
    {
      subject: "Assignment 1",
      A: 60
    },
    {
      subject: "Assignment 2",
      A: 60
    },
    {
      subject: "Assignment 3",
      A: 60
    },
    {
      subject: "Assignment 4",
      A: 59
    },
    {
      subject: "Assignment 5",
      A: 0
    },
    {
      subject: "Assignment 6",
      A: 51
    },
    {
      subject: "Assignment 7",
      A: 60
    },
    {
      subject: "Assignment 8",
      A: 57
    }
  ];
const Chart = () => {

    return (
        <RadarChart
      cx={250}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
   
};

export default Chart;