import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';


const Quiz = () => {
    const quizs = useLoaderData();


    const { questions } = quizs.data;
    // console.log(quizs.data.name)


    return (
        <div>
            <h1 className='text-center'>Quiz:{quizs.data.name}</h1>
            <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                {
                    questions.map(qu => <QuizDetails key={qu.id} qu={qu} ></QuizDetails>)
                }
            </h5>



        </div>
    );
};

export default Quiz;