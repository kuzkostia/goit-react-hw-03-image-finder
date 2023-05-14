import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};
  handleSubmit = search => {
    // Очищаємо масив з картинками, а також ставимо початкові значення для сторінки,
    // загальної кількості картинок, флагів і помилок.
    this.setState({
      search,
      images: [],
      page: 1,
      total: 1,
      loading: false,
      error: null,
      empty: false,
    });
  };

  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}
