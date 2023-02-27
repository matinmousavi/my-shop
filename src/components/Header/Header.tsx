import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button/Button";
const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {/* Start Header */}

      <div className="header ">
        <nav className="container-lg d-flex flex-row-reverse flex-lg-row justify-content-lg-between justify-content-around align-items-center nav-header py-3">
          <div className="nav-logo">
            <Link to="#">
              <img
                src="/images/Logo/logo.png"
                alt="لوگوی سایت"
                className="nav-img"
                width="70px"
                height="60px"
              />
            </Link>
          </div>
          <div className="nav-list">
            <ul className="nav-list-ul d-none d-lg-flex justify-content-around align-items-center">
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
              <li className="nav-list-li">
                <Link to="/" className="ms-2 text-decoration-none">
                  تست آیتم ها
                </Link>
              </li>
            </ul>
          </div>
          {/* <Link to="/login" className="nav-btn px-4 d-none d-lg-block"></Link> */}
          <Button
            title="ورود | ثبت نام"
            to="/login"
            className="nav-btn px-4 d-none d-lg-block"
          />  

          {/* Navbar-Mobile Icon */}

          <GoThreeBars
            onClick={() => setShow(true)}
            className="me-2 border-0  fs-1 text-dark d-lg-none"
            style={{ backgroundColor: "#fff", cursor: "pointer" }}
          />

          {/* Navbar-Mobile Icon */}
        </nav>

        {/* Start Navbar Mobile */}
        <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
          <Offcanvas.Header
            closeButton
            closeVariant="dark"
            closeLabel="Close"
            className="d-flex flex-row-reverse px-5 py-0 text-light"
            style={{ backgroundColor: "var(--light-color)" }}
          >
            <Offcanvas.Title>
              <img
                src="/images/Logo/logo.png"
                alt="لوگوی سایت"
                width={50}
                className="pt-4"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            className="text-light"
            style={{ backgroundColor: "var(--light-color)" }}
          >
            <div className="offcanvas-list">
              <ul>
                <li className="offcanvas-list-item">
                  <Button
                    title="اینستاگرام"
                    to="instagram-products"
                    className="me-3 d-block p-auto py-4 "
                  />
                </li>
                <div className="border-bottom"></div>
                <li className="offcanvas-list-item">
                  <Button
                    title="تلگرام"
                    to="telegram-products"
                    className="me-3 d-block p-auto py-4 "
                  />
                </li>
                <div className="border-bottom"></div>
                <li className="offcanvas-list-item">
                  <Button
                    title="یوتیوب"
                    to="youtube-products"
                    className="me-3 d-block p-auto py-4 "
                  />
                </li>
                <div className="border-bottom"></div>
                <li className="offcanvas-list-item">
                  <Button
                    title="فیلترشکن"
                    to="vpn-products"
                    className="me-3 d-block p-auto py-4 "
                  />
                </li>
              </ul>
            </div>
            <div>
              <Button
                title="ثبت نام"
                className="register-btn text-center d-block mx-auto my-4 py-3"
                to="/register"
              />
              <Button
                title="ورود"
                className="login-btn text-center d-block mx-auto my-4 py-3"
                to="/register"
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Finish Navbar Mobile */}
      </div>

      {/* Finish Header */}
    </>
  );
};

export default Header;
