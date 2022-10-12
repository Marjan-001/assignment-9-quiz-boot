import axios from 'axios';
// import { Tooltip } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = () => {

    const [bar, setBar] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')

            .then(data => {
                const chartDetails = data.data.data;
                const chartData = chartDetails.map(chart => {

                    const singleData = {
                        name: chart.name,
                        total: chart.total
                    }
                    return singleData;
                })
                console.log(chartData);
                setBar(chartData);

            })
    }, [])


    return (


        <BarChart width={550} height={400} data={bar}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis dataKey='total' />
        </BarChart>

    );
};

export default Chart;