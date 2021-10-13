import { Component } from 'react';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import s from './Searchbar.module.scss';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });

    if (this.state.query.trim() === '') {
      // alert('Ты ничего не ввел');
      toast.error('Please enter at least one letter !');
      return;
    }
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button__label}>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
            className={s.SearchForm__input}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
