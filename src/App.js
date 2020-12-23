import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;
    this.state = {
      todos: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const { desc, completed } = doc.data();
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        desc,
        completed,        
      });
    });
    this.setState({
      todos
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Todo List
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Todo</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Completed</th>                  
                </tr>
              </thead>
              <tbody>
                {this.state.todos.map(todo =>
                  <tr>
                    <td><Link to={`/show/${todo.sNo}`}>{todo.desc}</Link></td>
                    <td>{todo.completed}</td>                    
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;