import React from 'react';
import { Link } from 'react-router-dom'
import Classes from './Classes';
import ConditionalOutput from './ConditionalOutput';
import Styles from './Styles';
import TodoItem from './ToDo/TodoItem';
import TodoList from './ToDo/TodoList'
const Practice = () => {
 return(
   <div>
      <h1>Practice</h1>
      <TodoList/>
      <TodoItem/>
      <Styles/>
      <Classes/>
      <ConditionalOutput/>
          <Link to="/a6/hello">
              Hello
          </Link> |
          <Link to="/a6/build">
              Build
          </Link>

   </div>
 )
};

export default Practice;