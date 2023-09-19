import { Button } from "../../stories";

import { Categories, Products } from "..";
import HomeStyle from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../utli/constants/route.constant";

export const Home = () => {
  // React Router Hooks
  const navigate = useNavigate();

  // Page Events
  const goToProducts = (): void => {
    navigate(ROUTE.PRODUCTS);
  };
  return (
    <>
      <div className={HomeStyle.home}>
        <div className={HomeStyle.home__banner}>
          <div className={HomeStyle.home__banner__details}>
            <div>
              <h1>
                Better Your <br /> <p>E-Commerce</p>
              </h1>
              <span>Easier For You!</span>
              <p className={HomeStyle.banner__info}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo
                similique voluptas, repellat alias assumenda doloremque
                obcaecati dignissimos blanditiis vitae.
              </p>
              <Button label="Click Here" onClick={goToProducts}></Button>
            </div>
          </div>
          <div className={HomeStyle.home__banner__image}>
            <img src="../../assets/images/shopping.jpeg" alt="shopping.jpg" />
          </div>
        </div>
      </div>
      <Categories isHomePage={true}></Categories>
      <hr />
      <Products isHomePage={true}></Products>
    </>
  );
};
