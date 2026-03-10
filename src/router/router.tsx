import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PokemonPaginationPage } from "../features/pokemon/pages/PokemonPaginationPage";
import { PokemonLoadMorePage } from "../features/pokemon/pages/PokemonLoadMorePage";
import { PokemonDetailPage } from "../features/pokemon/pages/PokemonDetailPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/pagination" replace />,
      },
      {
        path: "pagination",
        element: <PokemonPaginationPage />,
      },
      {
        path: "load-more",
        element: <PokemonLoadMorePage />,
      },
    ],
  },
  {
    path: "pokemon/:id",
    element: <PokemonDetailPage />,
  },
]);
