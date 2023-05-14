import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form
          onSubmit={evt => {
            evt.preventDefault(); // відміна стандартної поведінки браузера

            // перевірка на пустий запит
            if (!this.state.search) {
              return console.error('Enter text for search.'); // повідомлення про помилку
            }

            // виклик функції з App.jsx для відправки запиту
            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
          className={css.form}
        >
          <button type="submit" className={css.button}>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
