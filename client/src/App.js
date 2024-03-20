// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Austin's Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
    );
  }
}

export default App;
