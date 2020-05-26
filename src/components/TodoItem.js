import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none',
      padding: '10px',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        {" "}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 8px',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
