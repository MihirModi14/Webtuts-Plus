import { useNavigate } from "react-router-dom";
import { Button } from "../../stories";
import AdminStyle from "./Admin.module.scss";
import { ROUTE } from "../../utli/constants/route.constant";

export const Admin = () => {
  const navigate = useNavigate();

  // Page Events
  const onClickProducts = () => {
    navigate(ROUTE.ADMIN_PRODUCTS, {
      state: { isHomePage: false, isAdminPage: true },
    });
  };

  const onClickCategories = () => {
    navigate(ROUTE.ADMIN_CATEGORIES);
  };

  return (
    <div className={AdminStyle.admin}>
      <Button label="Admin Products" onClick={onClickProducts}></Button>
      <Button label="Admin Categories" onClick={onClickCategories}></Button>
    </div>
  );
};
