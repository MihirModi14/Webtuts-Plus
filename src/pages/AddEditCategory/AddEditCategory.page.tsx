import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { addCategory, getCategories, updateCategory } from "../../APIs";
import { CategoryModel, AddUpdateCategoryModel } from "../../models";
import { Button, Input, Loader } from "../../stories";
import { ENDPOINT } from "../../utli/endpoints";
import { GET_QUERY_PARAM, ROUTE } from "../../utli/constants/route.constant";
import {
  descriptionValidate,
  imageValidate,
  nameValidate,
} from "../../utli/validations";

import AddCategoryStyle from "./AddEditCategory.module.scss";

export const AddEditCategory = ({
  isAddPage = true,
}: {
  isAddPage?: boolean;
}) => {
  // React Router Hooks
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<CategoryModel | null>(
    location.state?.category
  );

  const defaultValue = {
    categoryName: category?.categoryName,
    description: category?.description,
    id: category?.id,
    imageUrl: category?.imageUrl,
  };

  // Hooks
  useEffect(() => {
    if (!category && !isAddPage) {
      callCategoriesAPI();
    }
  }, []);

  // API calls
  const callCategoriesAPI = (): void => {
    setIsLoading(true);
    getCategories(ENDPOINT.CATEGORIES)
      .then((response: any) => {
        const categories: CategoryModel[] = response.data;

        if (!category) {
          const category: CategoryModel | undefined = categories.find(
            (category: CategoryModel) =>
              category.id ===
              Number(params[GET_QUERY_PARAM.CATEGORY_ID.replace(":", "")])
          );
          if (category) {
            setCategory(category);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Page Events
  const handleSubmit = (params: AddUpdateCategoryModel): void => {
    isAddPage
      ? addCategory(ENDPOINT.ADD_CATEGORY, params, true).then(() => {
          navigate(ROUTE.ADMIN_CATEGORIES);
        })
      : updateCategory(
          ENDPOINT.UPDATE_CATEGORY + `/${category?.id}`,
          params,
          true
        ).then(() => {
          navigate(ROUTE.ADMIN_CATEGORIES);
        });
  };

  // Helper Methods
  const validate = (values: AddUpdateCategoryModel) => {
    const errors = {
      categoryName: nameValidate(values.categoryName),
      description: descriptionValidate(values.description),
      imageUrl: imageValidate(values.imageUrl),
    };
    return errors;
  };

  return (
    <div className={AddCategoryStyle.category}>
      <div className="container">
        <h1>{isAddPage ? "Add Category" : "Edit Category"}</h1>

        <Form
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={defaultValue}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  name="categoryName"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        id="categoryName"
                        type="text"
                        labelType="Name"
                        placeholder="Enter name"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="description"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        id="description"
                        labelType="Description"
                        type="text"
                        placeholder="Enter description"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="imageUrl"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        id="imageUrl"
                        labelType="imageURL"
                        type="text"
                        placeholder="Enter image url"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Button
                  width="stretch"
                  disabled={!isAddPage && !category}
                  label="submit"
                  type="submit"
                  $primary={true}
                ></Button>
              </form>
            );
          }}
        ></Form>

        {isLoading && <Loader type="linear" />}
      </div>
    </div>
  );
};
