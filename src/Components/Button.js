import PropTypes from "prop-types";
// import TaskList from "./TaskList";

const Button = ({ type, text, onClick }) => {
  return (
    <button
      id="get"
      type={type}
      onClick={onClick}
      value="Saving btn "
      className="Addbtn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
