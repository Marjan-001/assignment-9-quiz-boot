import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layouts/Main"
import Statistic from "../components/Statistic/Statistic"
import Blog from "../components/Blog/Blog"
import Quiz from "../components/Quiz/Quiz";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),

                element: <Home></Home>
            },

            {
                path: 'statistic',
                element: <Statistic></Statistic>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'quiz/:id',
                element: <Quiz></Quiz>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
            }
        ]
    }
])