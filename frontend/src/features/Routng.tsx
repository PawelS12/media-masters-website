import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {HomePage} from "./home/HomePage.tsx";
import {ErrorPage} from "./error/ErrorPage.tsx";
import {ContactPage} from "./contact/ContactPage.tsx";
import {AppointmentsPage} from "./appointments/AppointmentsPage.tsx";
import {FormPage} from "./form/FormPage.tsx";
import {AdminPage} from "./admin/AdminPage.tsx";
import {BasePage} from "./admin/BasePage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/appointments',
                element: <AppointmentsPage/>
            },
            {
                path: '/form',
                element: <FormPage/>
            },
            {
                path: '/admin',
                element: <AdminPage/>
            },
            {
                path: '/base',
                element: <BasePage />
            },
            {
                path: '*',
                element: <ErrorPage/>
            },
        ],
    },
];

export const Routing = () => {
    return useRoutes(routes);
};
