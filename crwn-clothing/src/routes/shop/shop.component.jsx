import { useRoutes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <CategoriesPreview />,
        },
        {
          path: ":category",
          element: <Category />,
        },
      ],
    },
  ]);

  return element;
};

export default Shop;
