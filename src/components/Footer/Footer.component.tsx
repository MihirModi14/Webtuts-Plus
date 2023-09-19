import FooterStyle from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={`${FooterStyle.footer}`}>
        <div className={`${FooterStyle.footer__content} container`}>
          <ul>
            <p>Get to Know Us</p>
            <li>About Us</li>
            <li>Android App</li>
            <li>iOS App</li>
          </ul>
          <ul>
            <p>Connect With Us</p>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <p>Make Money With Us</p>
            <li>Sell with Us</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <li>Return Centre</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
            <li>App Download</li>
          </ul>
        </div>
        <p className={FooterStyle.copyright}>
          © 2023 Webtuts Plus. All Rights Reserved.
        </p>
      </div>
    </>
  );
};
