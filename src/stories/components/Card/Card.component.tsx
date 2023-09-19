import { useNavigate } from "react-router-dom";
import { StyledCard, StyledCardDetails } from "./Card.styled";
import { ROUTE } from "../../../utli/constants/route.constant";
import { CategoryModel, ProductModel } from "../../../models";

export interface CardPropTypes {
  categoryId: number;
  productId?: number;
  title: string;
  description: string;
  image: string;
  price?: string;
  isProductCard?: boolean;
  isAdminCard?: boolean;
}
export const CardComponent = ({
  categoryId,
  productId = 0,
  title,
  description,
  image,
  price = "0",
  isProductCard = false,
  isAdminCard = false,
}: CardPropTypes) => {
  // React Router Hooks
  const navigate = useNavigate();

  // Page Events
  const onClickTitle = () => {
    if (isProductCard) {
      const product: ProductModel = {
        categoryId: categoryId,
        description: description,
        id: productId,
        imageURL: image,
        name: title,
        price: price,
      };
      navigate(ROUTE.CATEGORY + categoryId + ROUTE.PRODUCT + productId, {
        state: {
          product: product,
        },
      });
    } else {
      navigate(ROUTE.CATEGORY + categoryId);
    }
  };

  const onClickEditBtn = (): void => {
    if (isProductCard) {
      const product: ProductModel = {
        categoryId: categoryId,
        id: productId,
        description: description,
        imageURL: image,
        name: title,
        price: price,
      };

      navigate(ROUTE.ADMIN_PRODUCTS + productId, {
        state: {
          product: product,
        },
      });
    } else {
      const category: CategoryModel = {
        id: categoryId,
        categoryName: title,
        description: description,
        imageUrl: image,
        products: [],
      };
      navigate(ROUTE.ADMIN_CATEGORIES + categoryId, {
        state: {
          category: category,
        },
      });
    }
  };

  return (
    <>
      <StyledCard>
        <img src={image} alt={title} />

        <StyledCardDetails>
          <a onClick={onClickTitle}>
            <h2>{title}</h2>
          </a>
          {isProductCard && <p>${price}</p>}
          <span>{description}</span>
        </StyledCardDetails>
        {isAdminCard && (
          <a className="edit-btn" onClick={onClickEditBtn}>
            Edit
          </a>
        )}
      </StyledCard>
    </>
  );
};
