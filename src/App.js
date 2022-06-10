import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RoutesMap from './routes/index.routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesMap.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
