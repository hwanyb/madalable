import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Emoji } from "emoji-picker-react";

import { RootState } from "../../modules";
import SuccessContainer from "./SuccessContainer";

const Base = styled.div``;
const GoalSuccessWrapper = styled.div``;
const Title = styled.h2``;
const GoalSuccess = styled.div``;
const GoalText = styled.h1``;
const GoalSuccessText = styled.h4``;
const TodosWrapper = styled.div``;
const Todos = styled.div``;
const TodoItem = styled.div``;
const TodoEmoji = styled(Emoji)``;
const TodoInfo = styled.div``;
const TodoText = styled.p``;
const TodoSuccess = styled.div``;
const TodoSuccessText = styled.p``;
const TodoSuccessBarWrapper = styled.div``;
const BackgroundBar = styled.div``;
const TodoSuccessBar = styled.div``;

export default function TodoOverview() {
  const selectedMandalart = useSelector(
    (state: RootState) => state.overviewReducer.selectedMandalart,
  );
  const selectedGoal = useSelector(
    (state: RootState) => state.overviewReducer.selectedGoal,
  );
  return (
    <Base>
      <GoalSuccessWrapper>
        <Title>건강 성공률</Title>
        <GoalSuccess>
          <SuccessContainer
            size={300}
            success={50}
            color={selectedMandalart.color}
          />
          <GoalText>건강</GoalText>
          <GoalSuccessText>50%</GoalSuccessText>
        </GoalSuccess>
      </GoalSuccessWrapper>
      <TodosWrapper>
        <Title>건강 실천과제</Title>
        <Todos>
          {selectedGoal.todos.map((todo) => (
            <TodoItem key={todo.id}>
              <TodoEmoji unified={todo.emoji} size={30} />
              <TodoInfo>
                <TodoText>{todo.text}</TodoText>
                <TodoSuccess>
                  <TodoSuccessText>50%</TodoSuccessText>
                  <TodoSuccessBarWrapper>
                    <BackgroundBar />
                    <TodoSuccessBar />
                  </TodoSuccessBarWrapper>
                </TodoSuccess>
              </TodoInfo>
            </TodoItem>
          ))}
        </Todos>
      </TodosWrapper>
    </Base>
  );
}
