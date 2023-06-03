import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';

function App() {
  return (
    <div className="App">
       <RouterProvider router={routes}></RouterProvider>
   {/* <h1 className='text-danger'>hlwww</h1> */}
    </div>
  );
}

export default App;
