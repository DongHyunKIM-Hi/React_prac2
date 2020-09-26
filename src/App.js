import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AddDialog from './components/AddDialog';
import { TodoProvider } from './components/TodoContext';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobaStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;
function App() {
  return (
    <TodoProvider>
      <GlobaStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
