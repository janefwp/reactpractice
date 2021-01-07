import React from 'react';

const TodoItem = (props) => {
    const completeStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completeStyle : null}>{props.item.text}</p>
        </div>
    )
}
export default TodoItem;