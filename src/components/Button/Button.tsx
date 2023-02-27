import { Link } from "react-router-dom";

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
        <Link to={`${to}`} className={className}>
          {title}
        </Link>
      );
    } else {
      return (
        <button className={className} onClick={onClick}>
          {title}
        </button>
      );
    }
  };
  return <div>{renderContent()}</div>;
};

export default Button;
