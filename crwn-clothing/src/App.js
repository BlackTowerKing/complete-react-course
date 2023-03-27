import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>Hello shop</h1>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='auth' element={<Authentication />}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
