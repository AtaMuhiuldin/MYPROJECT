import React, { Component } from "react";
import Header from "./component/header";
import TodoList from "./component/todoList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="root">
          <Header />
          <TodoList />
          <h1>hellow from umair 001</h1>
          <h2>hellow from amd 001</h2>

          <h2>AMD Work Day 1 002</h2>
          <h3> umair 002 day 1</h3>
        </div>
      </Provider>
    );
  }
}

export default App;
