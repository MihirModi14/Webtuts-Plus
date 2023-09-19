import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/default";

import { Footer, Header } from "./components";
import { useAuthInfo } from "./hooks";
import {
  AddEditCategory,
  AddEditProduct,
  Admin,
  Cart,
  Categories,
  Home,
  Login,
  Order,
  Product,
  Products,
  Register,
  Wishlist,
} from "./pages";
import { GET_QUERY_PARAM, ROUTE } from "./utli/constants/route.constant";

import "./App.scss";

function App() {
  // Context API
  const authInfo = useAuthInfo();

  return (
    <ThemeProvider theme={Theme}>
      {authInfo.state.isUserLogin ? (
        <>
          <Header></Header>
          <Routes>
            <Route path={ROUTE.HOME} element={<Home />}></Route>
            <Route
              path={ROUTE.PRODUCTS}
              element={<Products isAdminPage={false} />}
            ></Route>
            <Route
              path={ROUTE.ADMIN_PRODUCTS}
              element={<Products isAdminPage={true} />}
            ></Route>
            <Route
              path={ROUTE.CATEGORIES}
              element={<Categories isAdminPage={false} />}
            ></Route>
            <Route
              path={ROUTE.ADMIN_CATEGORIES}
              element={<Categories isAdminPage={true} />}
            ></Route>
            <Route path={ROUTE.WISHLIST} element={<Wishlist />}></Route>
            <Route path={ROUTE.CART} element={<Cart />}></Route>
            <Route
              path={
                ROUTE.CATEGORY +
                GET_QUERY_PARAM.CATEGORY_ID +
                ROUTE.PRODUCT +
                GET_QUERY_PARAM.PRODUCT_ID
              }
              element={<Product />}
            ></Route>
            <Route
              path={ROUTE.CATEGORY + GET_QUERY_PARAM.CATEGORY_ID}
              element={<Products />}
            ></Route>
            <Route path={ROUTE.ADMIN} element={<Admin />}></Route>
            <Route
              path={ROUTE.ADD_PRODUCT}
              element={<AddEditProduct />}
            ></Route>
            <Route
              path={ROUTE.ADD_CATEGORY}
              element={<AddEditCategory />}
            ></Route>
            <Route
              path={ROUTE.ADMIN_PRODUCTS + GET_QUERY_PARAM.PRODUCT_ID}
              element={<AddEditProduct isAddPage={false} />}
            ></Route>
            <Route
              path={ROUTE.ADMIN_CATEGORIES + GET_QUERY_PARAM.CATEGORY_ID}
              element={<AddEditCategory isAddPage={false} />}
            ></Route>
            <Route path={ROUTE.ORDER} element={<Order />}></Route>
            <Route
              path={ROUTE.NOT_FOUND}
              element={<Navigate to={ROUTE.HOME}></Navigate>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </>
      ) : (
        <Routes>
          <Route path={ROUTE.LOGIN} element={<Login />}></Route>
          <Route path={ROUTE.REGISTER} element={<Register />}></Route>
          <Route
            path={ROUTE.NOT_FOUND}
            element={<Navigate to={ROUTE.LOGIN}></Navigate>}
          ></Route>
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
