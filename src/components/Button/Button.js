import s from './Button.module.scss';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={s.Button}>
    Load more
  </button>
);

export default Button;
