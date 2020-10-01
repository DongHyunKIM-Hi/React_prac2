import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import AddDialog from './AddDialog';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 90%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `};
`;

function TodoCreate() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onCancel = () => {
    setDialog(false);
  };
  return (
    <>
      <CircleButton onClick={onClick}>
        <MdAdd />
      </CircleButton>
      <AddDialog
        title="정말로 삭제하시겠습니까?"
        confirmText="등록"
        cancelText="취소"
        onConfirm={onClick}
        onCancel={onCancel}
        visible={dialog}
        //여기까지는 오케이 AddDialog에서 값을 받아오는일 구현
      ></AddDialog>
    </>
  );
}

export default React.memo(TodoCreate);
