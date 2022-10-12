import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

// import React, { PureComponent } from 'react';

const Statistic = () => {
    const loaddata = useLoaderData();
    console.log(loaddata);
    const { data } = loaddata;
    console.log(data)





    return (
        <div>
            {
                data.map(st => <Chart key={st.id} st={st}></Chart>)
            }
        </div>
    );
};

export default Statistic;