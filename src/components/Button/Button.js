import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={s.Button}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
