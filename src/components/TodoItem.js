import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;
const backcolor = css`
    ${props =>
      props.tag === '식사' &&
      css`
        background-color: red;
      `}
    

    ${props =>
      props.tag === '식료품' &&
      css`
        background-color: orange;
      `}
    ${props =>
      props.tag === '교통' &&
      css`
        background-color: yellow;
      `}
    ${props =>
      props.tag === '생활' &&
      css`
        background-color: Green;
      `}
    ${props =>
      props.tag === '의료' &&
      css`
        background-color: purple;
      `}
`;
const Category = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  color: #343a40;
  border: 1px solid;
  border-radius: 4px;
  padding: 4px;
  ${backcolor};
`;

const Text = styled.div`
  font-size: 15px;
  flex: 1;
  color: #495057;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  color: red;
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
function TodoItem({ id, category, text, amount }) {
  const dispatch = useTodoDispatch();

  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id,
    });
  return (
    <TodoItemBlock>
      <Category tag={category}>{category}</Category>
      <Text>{text}</Text>
      <Price>{amount}원</Price>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
