import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getCategories, getProducts } from "../../APIs";
import { CategoryModel, ProductModel } from "../../models";
import { Button, CardComponent, Loader } from "../../stories";
import { GET_QUERY_PARAM, ROUTE } from "../../utli/constants/route.constant";
import { ENDPOINT } from "../../utli/endpoints";

import ProductsStyle from "./Products.module.scss";
import { Message } from "../../components";

export const Products = ({
  isHomePage = false,
  isAdminPage = false,
}: {
  isHomePage?: boolean;
  isAdminPage?: boolean;
}) => {
  // React Router Hooks
  const navigator = useNavigate();
  const params = useParams();
  const categoryID = Number(
    params[GET_QUERY_PARAM.CATEGORY_ID.replace(":", "")]
  );

  // State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductModel[]>([]);

  // Hooks
  useEffect(() => {
    if (categoryID) {
      callCategoriesAPI();
    } else {
      callProductsAPI();
    }
  }, []);

  // API Calls
  const callProductsAPI = (): void => {
    setIsLoading(true);
    getProducts(ENDPOINT.PRODUCTS)
      .then((response: any) => {
        if (isHomePage) {
          const products: ProductModel[] = response.data.slice(0, 9);
          setProducts(products);
        } else {
          const products: ProductModel[] = response.data;
          setProducts(products);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const callCategoriesAPI = (): void => {
    setIsLoading(true);
    getCategories(ENDPOINT.CATEGORIES)
      .then((response: any) => {
        const categories: CategoryModel[] = response.data;

        const category: CategoryModel | undefined = categories.find(
          (category: CategoryModel) => category.id === categoryID
        );
        const products: ProductModel[] | undefined = category?.products;

        if (products) setProducts(products);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickAddBtn = () => {
    navigator(ROUTE.ADD_PRODUCT);
  };

  return (
    <div className={ProductsStyle.products}>
      <div className="container">
        <h1 className={isHomePage ? "" : ProductsStyle.center}>
          {isHomePage ? "Top Products" : "Our Products"}
        </h1>
        {isAdminPage && (
          <Button
            label="Add new product"
            $primary={true}
            onClick={onClickAddBtn}
          ></Button>
        )}
        <div className={ProductsStyle.product}>
          {products.map((product: ProductModel) => {
            return (
              product.name && (
                <CardComponent
                  isProductCard={true}
                  isAdminCard={isAdminPage}
                  categoryId={categoryID ? categoryID : product.categoryId}
                  productId={product.id}
                  key={product.id}
                  image={product.imageURL}
                  title={product.name}
                  price={product.price}
                  description={product.description}
                ></CardComponent>
              )
            );
          })}
        </div>

        {isLoading && (
          <Loader type={isHomePage ? "circular" : "linear"}></Loader>
        )}
        {!isLoading && products.length === 0 && (
          <Message type="NO_DATA" message="No Product Found !!"></Message>
        )}
      </div>
    </div>
  );
};
