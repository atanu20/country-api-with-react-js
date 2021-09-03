import React from 'react'
import {  Bar } from 'react-chartjs-2';

const Chart = ({country,population,area}) => {



    const barChart = (
        country ? (
          <Bar
            data={{
              labels: ['Area', 'Population'],
              datasets: [
                {
                  label: "Data",
                  backgroundColor: ['#97a61a', '#16a085'],
                  data: [area*10000,population],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in okk` },
            }}



            
          />
        ) : null
      );
    return (
        <>
            {
                barChart
            }

            
        </>
    )
}

export default Chart
