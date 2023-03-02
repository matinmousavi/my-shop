import "./Register.css";
import { MdEmail } from "react-icons/md";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { HiLockClosed, HiUser } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { Input } from "../../../components/Form/Input/Input";
import Button from "../../../components/Button/Button";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <>
      <div className="form-container"></div>
      <div className="typewriter-container">
        <Typewriter
          options={{
            strings: "حساب کاربری خود را ایجاد کنید.",
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </div>
      <form className="d-flex form-content flex-column m-auto">
        <Input
          name="fullnameInput"
          type="text"
          placeholder="نام کامل خود را وارد کنید"
          onChange={() => console.log("")}
          value=""
          className="form-input mt-5"
          inputProps={{
            endAdornment: <HiUser className="form-input-icon" />,
          }}
        />
        <Input
          name="fullnameInput"
          type="text"
          placeholder="ایمیل"
          onChange={() => console.log("")}
          value=""
          className="form-input"
          inputProps={{
            endAdornment: <MdEmail className="form-input-icon" />,
          }}
        />
        <Input
          name="fullnameInput"
          type="text"
          placeholder="رمز عبور"
          onChange={() => console.log("")}
          value=""
          className="form-input mb-5"
          inputProps={{
            endAdornment: <HiLockClosed className="form-input-icon" />,
          }}
        />
        <Button title="ثبت نام" className="form-btn" />
        <div className="form-question d-flex justify-content-center mt-5">
          <span className="px-3">حساب کاربری دارید؟</span>
          <Button
            title="از اینجا وارد شوید"
            to="/form"
            className="fw-bolder text-primary"
          />
        </div>
        <div className="other-way text-muted">
          <span>ثبت نام از طریق</span>
        </div>
        <div className="d-flex justify-content-center w-25 m-auto">
          <Link to="/google.com" className="google-btn">
            <AiOutlineGooglePlus className="fs-1" />
          </Link>
          <Link to="/google.com" className="facebook-btn">
            <GrFacebookOption className="fs-1" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
