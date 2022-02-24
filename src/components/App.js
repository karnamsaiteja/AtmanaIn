import axios from "axios";
import React from "react";
import CategoriesList from "./CategoriesList";
import DisplayJoke from "./DisplayedJoke";
import "./App.css";

class App extends React.Component {
  state = { categories: [], selectedCategory: null, displayedJoke: null };
  async componentDidMount() {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/categories`
    );
    this.setState({ categories: response.data });
  }

  onCategorySelect = async (category) => {
    this.setState({ selectedCategory: category });
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ displayedJoke: response.data.value });
  };

  randomJoke = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.selectedCategory}`
    );
    this.setState({ displayedJoke: response.data.value });
  };

  render() {
    return (
      <div>
        <h1 className="heading-primary">CHUCK NORRIES</h1>
        <CategoriesList
          onCategorySelect={this.onCategorySelect}
          categories={this.state.categories}
        />
        <p className="selected-category">
          Selected Category: {this.state.selectedCategory}
        </p>
        <div>
          <DisplayJoke
            randomJoke={this.randomJoke}
            joke={this.state.displayedJoke}
          />
        </div>
      </div>
    );
  }
}

export default App;
