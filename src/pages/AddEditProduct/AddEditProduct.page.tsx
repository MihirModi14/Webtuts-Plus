import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  getCategories,
  getProducts,
  updateProduct,
  addProduct,
} from "../../APIs";
import {
  AddUpdateProductModel,
  CategoryModel,
  ProductModel,
} from "../../models";
import { Button, Dropdown, Input, Loader } from "../../stories";
import { ENDPOINT } from "../../utli/endpoints";
import { GET_QUERY_PARAM, ROUTE } from "../../utli/constants/route.constant";
import {
  categoryTypeValidate,
  descriptionValidate,
  imageValidate,
  nameValidate,
  priceValidate,
} from "../../utli/validations";

import AddProductStyle from "./AddEditProduct.module.scss";

export const AddEditProduct = ({
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
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [product, setProduct] = useState<ProductModel | null>(
    location.state?.product
  );
  const defaultValue = {
    id: product?.id,
    categoryId: product?.categoryId,
    name: product?.name,
    description: product?.description,
    price: product?.price,
    imageURL: product?.imageURL,
  };

  // Hooks
  useEffect(() => {
    callCategoriesAPI();
    if (!isAddPage && !product) {
      callProductsAPI();
    }
  }, []);

  // API calls
  const callCategoriesAPI = (): void => {
    setIsLoading(true);
    getCategories(ENDPOINT.CATEGORIES)
      .then((response: any) => {
        const categories: CategoryModel[] = response.data;
        setCategories(categories);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const callProductsAPI = (): void => {
    setIsLoading(true);
    getProducts(ENDPOINT.PRODUCTS)
      .then((response) => {
        const products: ProductModel[] = response.data;

        const product: ProductModel | undefined = products.find(
          (product: ProductModel) =>
            product.id ===
            Number(params[GET_QUERY_PARAM.PRODUCT_ID.replace(":", "")])
        );
        if (product) {
          setProduct(product);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Page Events
  const handleSubmit = (values: AddUpdateProductModel) => {
    isAddPage
      ? addProduct(ENDPOINT.ADD_PRODUCT, values, true).then(() => {
          navigate(ROUTE.ADMIN_PRODUCTS);
        })
      : updateProduct(
          ENDPOINT.UPDATE_PRODUCT + `/${product?.id}`,
          values,
          true
        ).then(() => {
          navigate(ROUTE.ADMIN_PRODUCTS);
        });
  };

  // Helper Methods
  const validate = (values: AddUpdateProductModel) => {
    const errors = {
      categoryId: categoryTypeValidate(values.categoryId),
      name: nameValidate(values.name),
      description: descriptionValidate(values.description),
      imageURL: imageValidate(values.imageURL),
      price: priceValidate(values.price),
    };

    return errors;
  };

  return (
    <div className={AddProductStyle.product}>
      <div className="container">
        <h1>{isAddPage ? "Add Product" : "Edit Product"}</h1>

        <Form
          onSubmit={handleSubmit}
          validate={validate}
          initialValues={defaultValue}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  name="categoryId"
                  render={({ input, meta }) => {
                    const options = categories.map(
                      (category: CategoryModel) => {
                        return {
                          label: category.categoryName,
                          value: String(category.id),
                        };
                      }
                    );
                    return (
                      <Dropdown
                        labelType="Category Type"
                        options={options}
                        disabled={!categories.length}
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        {...input}
                      ></Dropdown>
                    );
                  }}
                ></Field>
                <Field
                  name="name"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        id="name"
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
                        id="description"
                        {...input}
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
                  name="imageURL"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        id="image url"
                        {...input}
                        labelType="image Url"
                        type="text"
                        placeholder="Enter image url"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="price"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        id="price"
                        {...input}
                        labelType="Price"
                        type="number"
                        placeholder="Enter price"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Button
                  width="stretch"
                  disabled={
                    isAddPage
                      ? categories?.length === 0
                      : categories?.length === 0 || !product?.id
                  }
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
