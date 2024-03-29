import { useRoutes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop/*",
          element: <Shop />,
        },
        {
          path: "auth",
          element: <Authentication />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return element;
};

export default App;
