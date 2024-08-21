import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeAluno from "./HomeAluno";
import CriarAluno from "./aluno/CriarAluno";
import ListarAluno from "./aluno/ListarAluno";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeAluno />,
        children: [
            {
                path: "aluno/listar",
                element: <ListarAluno />,
            },
            {
                path: "aluno/criar",
                element: <CriarAluno />,
            },
        ],
    },
]);

const MainAluno = () => {
    return <RouterProvider router={router} />;
};
export default MainAluno;