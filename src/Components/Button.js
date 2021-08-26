import PropTypes from "prop-types";

const Button = ({ type, text, onClick }) => {
  return (
    <button type={type} onClick={onClick} value="Saving btn " className="btn">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
