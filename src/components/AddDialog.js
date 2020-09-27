import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from './TodoContext';
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  p {
    font-weight: bold;
  }
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  select {
    width: 100%;
  }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled.button`
  & + & {
    margin-left: 0.5rem;
  }
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
function AddDialog({ confirmText, cancelText, onConfirm, onCancel, visible }) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const onChange1 = e => setValue1(e.target.value);
  const onChange2 = e => setValue2(e.target.value);
  const onChange3 = e => setValue3(e.target.value);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value1,
        amount: value2,
        category: value3,
        // amount: amount,
        // category: category,
      },
    });
    nextId.current += 1;
  };
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>지출 등록</h3>
        <p>내용</p>
        <Input onChange={onChange1} value={value1}></Input>
        <p>금액</p>
        <Input onChange={onChange2} value={value2}></Input>
        <p>카테고리</p>
        <select onChange={onChange3} value={value3}>
          <option value="전체">전체</option>
          <option value="식사">식사</option>
          <option value="식료품">식료품</option>
          <option value="교통">교통</option>
          <option value="생활">생활</option>
          <option value="의료">의료</option>
        </select>
        <ButtonGroup>
          <ShortMarginButton onClick={onCancel}>{cancelText}</ShortMarginButton>
          <ShortMarginButton onClick={onSubmit}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

AddDialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};

export default AddDialog;
