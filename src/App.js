import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import About from "./UI/About";
import ProductList from "./UI/ProductList";

function App() {

  const router = createBrowserRouter([
    { path:"/", element:<Home/>},
    { path:"/about", element:<About/>},
    { path:"/store", element:<ProductList/>},
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
