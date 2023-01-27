import './App.css';
import 'antd/dist/antd.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
function App() {
    const router = createBrowserRouter([
        {
            path: "/" ,
            element: <HomePage/>
        },
        {
            path: "items",
            element : <ItemPage/>      
        }
    ])
  return (
    <div >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
