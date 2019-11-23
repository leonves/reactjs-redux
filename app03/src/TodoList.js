import React , { Fragment } from 'react';

import { connect } from 'react-redux';

const TodoList = ({todos, addTodo}) => (
 
    <Fragment>

        <ul>
            { todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
        <button onClick={() => addTodo('Novo Todo')}>Adicionar</button>
    </Fragment>
);

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch({
        type: 'ADD_TODO',
        payload: {
            text
        } 
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);