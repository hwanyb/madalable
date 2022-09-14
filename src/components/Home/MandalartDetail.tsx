import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { setIsOpenedMandalartDetail } from "../../modules/mandalartReducer";
import { CloseBtn } from "./CreateMandalart";

const Base = styled.div``;
const DetailContainer = styled.div``;
const MandalartAlias = styled.div``;
const MainGoal = styled.div``;
const GoalInput = styled.input``;
const GoalWrapper = styled.div``;
const GoalText = styled.div``;
const Todo = styled.div``;

type GoalProps = {
  id: number;
  text: string;
  todos: TodoProps[];
};
type TodoProps = {
  id: number;
  text: string;
  emoji: string;
  multiple: boolean;
  period: string;
  periodText: string;
  periodRange: string;
  periodNumber: number;
};

export default function MandalartDetail() {
  const dispatch = useDispatch();

  const selectedMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.selectedMandalart,
  );

  const [goals, setGoals] = useState<GoalProps[]>(selectedMandalart.goals);

  console.log(selectedMandalart);

  const onCloseBtnClick = () => {
    dispatch(setIsOpenedMandalartDetail());
  };

  return (
    <Base>
      <CloseBtn className="material-symbols-rounded" onClick={onCloseBtnClick}>
        close
      </CloseBtn>
      <DetailContainer>
        <MandalartAlias>{selectedMandalart.alias}</MandalartAlias>
        <MainGoal>
          {goals.map((goal) => (
            <GoalInput key={goal.id} value={goal.text} type="text" />
          ))}
        </MainGoal>
        {goals.map((goal) => (
          <GoalWrapper key={goal.id}>
            <GoalText>{goal.text}</GoalText>
            {goal.todos.map((todo) => (
              <Todo key={todo.id}>{todo.text}</Todo>
            ))}
          </GoalWrapper>
        ))}
      </DetailContainer>
    </Base>
  );
}
