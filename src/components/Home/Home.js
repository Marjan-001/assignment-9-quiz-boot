import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const { data } = useLoaderData();
    console.log(data)

    return (
        <div className='home'>

            <div>
                <h1 className> Welcome to <span className='site-name'>QuizzBoot</span></h1>
                <p>Assessment, instruction, and practice that motivate every student to mastery</p>
                <div className='topic-container'>
                    {
                        data.map(topics => <Topics key={topics.id} topics={topics}></Topics>

                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;