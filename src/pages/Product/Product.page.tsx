import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { addToCart, addToWishList, getCategories } from "../../APIs";
import { CategoryModel, ProductModel } from "../../models";
import { Button, Loader } from "../../stories";
import { GET_QUERY_PARAM, ROUTE } from "../../utli/constants/route.constant";
import { ENDPOINT } from "../../utli/endpoints";

import ProductStyle from "./Product.module.scss";
import { Message } from "../../components";
import { useAuthInfo, useUserInfo } from "../../hooks";

export const Product = () => {
  // React Router Hooks
  const params = useParams();
  const navigate = useNavigate();
  const userInfo = useUserInfo();
  const location = useLocation();

  // State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<ProductModel | undefined>(
    location.state?.product
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Custom Hooks
  const authInfo = useAuthInfo();

  // Hooks
  useEffect(() => {
    if (!product) {
      callCategoriesAPI();
    }
  }, []);

  // API calls
  const callCategoriesAPI = (): void => {
    setIsLoading(true);
    getCategories(ENDPOINT.CATEGORIES)
      .then((response: any) => {
        const categories: CategoryModel[] = response.data;

        const category: CategoryModel | undefined = categories.find(
          (category) => {
            return (
              category.id ===
              Number(params[GET_QUERY_PARAM.CATEGORY_ID.replace(":", "")])
            );
          }
        );

        if (!category) {
          navigate(
            ROUTE.CATEGORY +
              Number(params[GET_QUERY_PARAM.CATEGORY_ID.replace(":", "")])
          );
        }

        const product: ProductModel | undefined = category?.products.find(
          (product: ProductModel) => {
            return (
              product.id ===
              Number(params[GET_QUERY_PARAM.PRODUCT_ID.replace(":", "")])
            );
          }
        );

        if (product) setProduct(product);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Page Events
  const onClickAddToCart = (
    id: number,
    productId: number,
    quantity: number
  ): void => {
    setIsLoading(true);
    addToCart(
      ENDPOINT.ADD_TO_CART + authInfo.state.token,
      {
        id: id,
        productId: productId,
        quantity: quantity,
      },
      true
    )
      .then(() => {
        userInfo.dispatch({ type: "INCREASE_CART" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickAddToWishlist = (
    id: number,
    name: string,
    description: string,
    imageURL: string,
    price: string
  ): void => {
    setIsLoading(true);
    addToWishList(
      ENDPOINT.ADD_TO_WISHLIST + authInfo.state.token,
      {
        description: description,
        id: id,
        imageURL: imageURL,
        name: name,
        price: price,
      },
      true
    ).finally(() => {
      setIsLoading(false);
    });
  };

  const onClickShowCart = (): void => {
    navigate(ROUTE.CART);
  };

  return (
    <div className={ProductStyle.productBox}>
      <div className="container">
        {product && (
          <div className={ProductStyle.product}>
            <img src={product?.imageURL} alt={product?.name} />

            <div className={ProductStyle.product__details}>
              <h1>{product?.name}</h1>
              <span>$ {product?.price}</span>
              <p>{product?.description}</p>

              <div className={ProductStyle.product__addCart}>
                <span>Quantity</span>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <Button
                  label="Add to Cart"
                  onClick={() => {
                    if (product) onClickAddToCart(0, product.id, quantity);
                  }}
                ></Button>
              </div>

              <div className={ProductStyle.product__feature}>
                <h4>Feature</h4>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Officia quas, officiis eius magni error magnam voluptatem
                  </li>
                  <li>
                    nesciunt quod! Earum voluptatibus quaerat dolorem doloribus
                  </li>
                  <li>
                    molestias ipsum ab, ipsa consectetur laboriosam soluta et
                  </li>
                  <li>
                    ut doloremque dolore corrupti, architecto iusto beatae.
                  </li>
                </ul>
              </div>

              <div className={ProductStyle.product__action}>
                <Button
                  label="Add to Wishlist"
                  $primary={true}
                  onClick={() => {
                    if (product) {
                      onClickAddToWishlist(
                        product.id,
                        product.name,
                        product.description,
                        product.imageURL,
                        product.price
                      );
                    }
                  }}
                ></Button>
                <Button
                  label="Show Cart"
                  $primary={true}
                  onClick={onClickShowCart}
                ></Button>
              </div>
            </div>
          </div>
        )}

        {isLoading && <Loader type="linear"></Loader>}
        {!isLoading && !product && (
          <Message type="NO_DATA" message="No Product Found !!"></Message>
        )}
      </div>
    </div>
  );
};
