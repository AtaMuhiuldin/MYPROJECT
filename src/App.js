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
        





<h3> Umair Branch 1000 lines of code 004</h3>
       <h3> new commit 3 erro 009</h3>  

        



        </div>
      </Provider>
    );
  }
}

export default App;
