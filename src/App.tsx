import { useRoutes } from 'react-router-dom';
import { routeConfig } from '@/config/routerConfig';

function App() {
  const element = useRoutes(routeConfig)
  return (
    <>{element}</>
  );
}

export default App;
