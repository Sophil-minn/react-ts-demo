
import Index from "@/pages/Index";
import Hook from "@/pages/hoc";
import NotFound from "../NotFound";
import Minn from "../minn";


export const routeConfig = [
  {
     path:'/',
     element:<Minn />
  },
  {
     path:'/home',
     element:<Index />
  },
  {
     path:'/hook',
     element:<Hook />
  },
  {
     path:'/blog',
     element:<Minn />
  },
  {
     path:'/*',
     element:<NotFound />,
  },
 
];