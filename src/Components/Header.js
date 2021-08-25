import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("adding a task");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="Black" text="Add Task" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "To-Do List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
