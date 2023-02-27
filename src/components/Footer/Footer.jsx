import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Start Footer */}

      <footer className="footer w-100">
        <div className="footer-container container d-flex flex-column justify-content-between w-100">
          <div className="footer-content d-flex justify-content-between row m-3">
            <div className="about-us mt-sm-5 col-sm-12 col-md-6 col-lg-3 text-light">
              <span className="h2">درباره ما</span>
              <p className="fs-5 my-5 w-75 text-muted">
                لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما به
                متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                گفته می‌شود
              </p>
            </div>
            <div className="our-services mt-sm-5 col-sm-12 col-md-6 col-lg-3 text-light">
              <span className="h2">درباره ما</span>
              <p className="fs-5 my-5 w-75 text-muted">
                لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما به
                متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                گفته می‌شود
              </p>
            </div>
            <div className="contacts mt-sm-5 col-sm-12 col-md-6 col-lg-3 text-light">
              <span className="h2">درباره ما</span>
              <p className="fs-5 my-5 w-75 text-muted">
                لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما به
                متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                گفته می‌شود
              </p>
            </div>
            <div className="quick-access mt-sm-5 col-sm-12 col-md-6 col-lg-3 text-light">
              <span className="h2">درباره ما</span>
              <p className="fs-5 my-5 w-75 text-muted">
                لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما به
                متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                گفته می‌شود
              </p>
            </div>
          </div>
          <div className="footer-icons text-light text-center m-3">
            <Link to="#">
              <img
                src="/images/Icons/telegram.png"
                alt="telegram-icon"
                width="30px"
                className="mx-2"
              />
            </Link>
            <Link to="#">
              <img
                src="/images/Icons/gmail.png"
                alt="gmail-icon"
                width="30px"
                className="mx-2"
              />
            </Link>
            <Link to="#">
              <img
                src="/images/Icons/instagram.png"
                alt="instagram-icon"
                width="30px"
                className="mx-2"
              />
            </Link>
          </div>
          <div className="footer-copyright fs-4 text-muted text-center m-3">
            کلیه ی حقوق معنوی و مالکیت این سایت متعلق به تیم لورم ایپسوم میباشد.
          </div>
        </div>
      </footer>

      {/* Finish Footer */}
    </>
  );
};

export default Footer;
