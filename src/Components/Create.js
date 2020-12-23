import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('todos');
    this.state = {
      desc: '',
      completed: ''      
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { desc, completed } = this.state;

    this.ref.add({
      desc,
      completed
    }).then((docRef) => {
      this.setState({
        desc : '',
        completed : ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { desc, completed } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Todo
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Add Todo</Link></h4>
            <form onSubmit={this.onSubmit}>              
              <div class="form-group">
                <label for="desc">Description:</label>
                <input type="text" class="form-control" name="desc" value={desc} onChange={this.onChange} placeholder="Description" cols="80" rows="3"/>
              </div>
              <div class="form-group">
                <label for="completed">Completed:</label>
                <input type="checkbox" class="form-control" name="author" value={completed} onChange={this.onChange} placeholder="Completed" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;