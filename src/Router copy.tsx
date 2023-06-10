import { Outlet, useRoutes } from "react-router-dom";
import { lazy } from "react";

import NotFound from "./pages/NotFound";
import Hook from "./pages/hook";
import Hook2 from "./pages/hook2";

const Index = lazy(() => import('./pages/Index'));


const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/personal',
    element: <Outlet />,
    children: [
      {
        path: 'information',
        element: <Hook />
      },
      {
        path: 'contacts',
        element: <Hook2 />
      }
    ]
  }
];

const WrappedRoutes = () => {
  return useRoutes(routes);
};

// export default WrappedRoutes;

export default function Routers() {
  console.log('WrappedRoutes: ', WrappedRoutes);
  return (
    <WrappedRoutes />
  );
}