import { Tooltip } from 'flowbite-react';
import React, { } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = ({ st }) => {

    const dataChart = [
        {
            name: st.name,
            total: st.total
        }
    ]






    return (
        <ResponsiveContainer width="100%" height="100%" >

            <BarChart
                width={500}
                height={300}
                data={dataChart}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name' />
                <YAxis dataKey='total' />
                <Tooltip />
                <Legend />
                <Bar dataKey='name' fill="#8884d8" />
                <Bar dataKey='total' fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer >
    );
};

export default Chart;