import { useNavigate } from "react-router-dom";

import { MenuComponent } from "../../stories";
import { ROUTE } from "../../utli/constants/route.constant";

import {
  AccountsMenuOptions,
  BrowserMenuOptions,
  HeaderOptionsEnum,
} from "./Header.constant";
import HeaderStyle from "./Header.module.scss";
import { useAuthInfo, useUserInfo } from "../../hooks";

export const Header = () => {
  const navigate = useNavigate();
  const authInfo = useAuthInfo();
  const userInfo = useUserInfo();

  // Page Events
  const handleMenuClick = (selectedOption: { id: number; value: string }) => {
    switch (selectedOption.value) {
      case HeaderOptionsEnum.HOME:
        navigate(ROUTE.HOME);
        break;
      case HeaderOptionsEnum.PRODUCT:
        navigate(ROUTE.PRODUCTS);
        break;
      case HeaderOptionsEnum.CATEGORY:
        navigate(ROUTE.CATEGORIES);
        break;
      case HeaderOptionsEnum.WISHLIST:
        navigate(ROUTE.WISHLIST);
        break;
      case HeaderOptionsEnum.ADMIN:
        navigate(ROUTE.ADMIN);
        break;
      case HeaderOptionsEnum.SIGNOUT:
        authInfo.dispatch({
          type: "REMOVE_TOKEN",
        });
        break;
    }
  };

  const handleOrdersClick = () => {
    navigate(ROUTE.ORDER);
  };

  const handleCartClick = () => {
    navigate(ROUTE.CART);
  };

  return (
    <>
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.header__logo}>Webtuts Plus</div>
        <div className={HeaderStyle.header__options}>
          <ul>
            <li>
              <MenuComponent
                label="Browse"
                menuItems={BrowserMenuOptions}
                handleClick={handleMenuClick}
              ></MenuComponent>
            </li>
            <li>
              <MenuComponent
                label="Accounts"
                menuItems={AccountsMenuOptions}
                handleClick={handleMenuClick}
              ></MenuComponent>
            </li>
            <li>
              <a onClick={handleOrdersClick}>Orders</a>
            </li>
            <li>
              <a className={HeaderStyle.cart} onClick={handleCartClick}>
                <img src="../../assets/icons/cart.svg" alt="cart" />
                <span>{userInfo.state.cartSize}</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
