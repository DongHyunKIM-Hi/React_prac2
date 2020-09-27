import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;

  span {
    font-size: 20px;
    color: red;
  }
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  h2 {
    margin: 0;
    margin-top: 20px;
    font-size: 20px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .catediv {
    text-align: right;
    font-weight: bold;
    margin: 15px;
    padding: 15px;
    font-size: 20px;
    border-bottom: 1px solid #e9ecef;
    border-top: 1px solid #e9ecef;
    color: #343a40;
  }
`;
function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const items = useTodoState();
  const sum = items.reduce(function(old, current) {
    return old + current.amount;
  }, 0);

  return (
    <TodoHeadBlock>
      <h1>오늘의 지출</h1>
      <h2>{dateString}</h2>
      <h2>
        총 지출: <span>-{sum}원</span>
      </h2>
      <div className="catediv">카테고리별로 보기:</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
