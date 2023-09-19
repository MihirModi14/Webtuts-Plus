import { useEffect, useState } from "react";

import { getCategories } from "../../APIs";
import { CategoryModel } from "../../models";
import { Button, CardComponent, Loader } from "../../stories";
import { ENDPOINT } from "../../utli/endpoints";

import CategoryStyle from "./Categories.module.scss";
import { Message } from "../../components";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../utli/constants/route.constant";

export const Categories = ({
  isHomePage = false,
  isAdminPage = false,
}: {
  isHomePage?: boolean;
  isAdminPage?: boolean;
}) => {
  // React Router Hooks
  const navigator = useNavigate();

  // State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  // Hooks
  useEffect(() => {
    callCategoriesAPI();
  }, []);

  // API Calls
  const callCategoriesAPI = (): void => {
    setIsLoading(true);

    getCategories(ENDPOINT.CATEGORIES)
      .then((response: any) => {
        if (isHomePage) {
          const categories: CategoryModel[] = response.data.slice(0, 9);
          setCategories(categories);
        } else {
          const categories: CategoryModel[] = response.data;
          setCategories(categories);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickAddBtn = () => {
    navigator(ROUTE.ADD_CATEGORY);
  };

  return (
    <div className={CategoryStyle.categories}>
      <div className="container">
        <h1 className={isHomePage ? "" : CategoryStyle.center}>
          {isHomePage ? "Top Categories" : "Our Categories"}
        </h1>
        {isAdminPage && (
          <Button
            label="Add new category"
            $primary={true}
            onClick={onClickAddBtn}
          ></Button>
        )}
        <div className={CategoryStyle.category}>
          {categories.map((category: CategoryModel) => {
            return (
              category.categoryName && (
                <CardComponent
                  isAdminCard={isAdminPage}
                  categoryId={category.id}
                  key={category.id}
                  image={category.imageUrl}
                  title={category.categoryName}
                  description={category.description}
                ></CardComponent>
              )
            );
          })}
        </div>
        {isLoading && (
          <Loader type={isHomePage ? "circular" : "linear"}></Loader>
        )}
        {!isLoading && categories.length === 0 && (
          <Message type="NO_DATA" message="No Product Found !!"></Message>
        )}
      </div>
    </div>
  );
};
