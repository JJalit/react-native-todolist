import React, {useContext} from 'react';
import styled from 'styled-components/native';

import {TodoListContext} from '../../../../../Context';

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 0px 8px;
`;

interface Props {
  hideTodoInput: () => void;
}

const TextInput = ({hideTodoInput}: Props) => {
  const {addTodoList} = useContext<ITodoListContext>(TodoListContext);
  return (
    <Input
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="할일을 입력하세요!"
      returnKeyType="done"
      onSubmitEditing={({nativeEvent}) => {
        addTodoList(nativeEvent.text);
        hideTodoInput();
      }}
    />
  );
};

export default TextInput;
