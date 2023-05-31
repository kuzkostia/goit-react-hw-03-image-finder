import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={css.Button} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  clickLoad: PropTypes.func.isRequired,
};
