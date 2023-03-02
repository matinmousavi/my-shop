import { Link } from "react-router-dom";
import './Button.css'

interface IProps {
  title: string;
  className?: string;
  to?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ title, className, onClick, to }) => {
  const renderContent = () => {
    if (to) {
      return (
        <Link to={`${to}`} className={`btn-style ${className}`}>
          {title}
        </Link>
      );
    } else {
      return (
        <button className={`btn-style ${className}`} onClick={onClick}>
          {title}
        </button>
      );
    }
  };
  return <div>{renderContent()}</div>;
};

export default Button;
