import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { Emoji } from "emoji-picker-react";

import { RootState } from "../../modules";
import SuccessContainer from "./SuccessContainer";
import { Icon } from "../../styles/Common";

const Base = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.fontPrimary};
  align-items: center;
  @media ${props => props.theme.windowSize.tablet}{
    flex-direction: column;
    overflow-y: auto;
    padding: 30px;
  }
`;
const ContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-rows: 0.5fr 12fr;
  box-sizing: border-box;
  @media ${(props) => props.theme.windowSize.laptop} {
    width: 40%;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 100%;
  }

  ${(props) =>
    props.id === "todos" &&
    css`
      /* @media ${(props) => props.theme.windowSize.desktop}{
    padding: 0;
    padding-left: 30px;
  } */
      padding: 0;
      padding-left: 50px;

      @media ${(props) => props.theme.windowSize.laptop} {
        width: 60%;
      }
      @media ${(props) => props.theme.windowSize.tablet} {
        width: 100%;
        padding-left: 0;
      }
    `}

  &:first-child {
    border-right: 1px solid ${(props) => props.theme.color.lightGray};
    @media ${(props) => props.theme.windowSize.tablet} {
      border-right: none;
    }
  }

  .success-rate-wrapper {
    position: relative;
  }
  .success-rate-text {
    display: none;
  }
  .front-circle {
    background-color: ${(props) => props.theme.color.backgroundSecond};
  }
  .success-rate-circle {
    filter: none;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 700;
  background-color: ${(props) => props.color};
  width: fit-content;
  margin: 0 auto;
  padding: 5px 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 2px 2px 5px ${(props) => props.theme.color.shadow};
`;
const GoalSuccess = styled.div`
  position: relative;
`;
const GoalSuccessTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const GoalText = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 300;
`;
const GoalSuccessText = styled.h4`
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-top: 10px;
  font-weight: 700;
`;
const Todos = styled.div`
  background-color: ${(props) => props.theme.color.transWhite};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 5px 5px 10px ${(props) => props.theme.color.shadow};
  /* margin: 50px 0; */
  margin-top: 50px;
  padding: 30px;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  align-items: center;
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 100%;
    gap: 15px;
  }
 
`;
const TodoItem = styled.div`
  width: 100%;
  text-align: left;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;
const TodoEmojiWrapper = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 0px;
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 28px;
    height: 28px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    width: 20px;
    height: 20 px;
  }
`;
const TodoEmoji = styled(Emoji)``;
const TodoInfo = styled.div`
  width: 100%;
`;
const TodoText = styled.p`
  width: fit-content;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 700;
`;

const TodoDone = styled(Icon)<{ done: boolean }>`
  color: ${props => props.done ? props.theme.color.primary : props.theme.color.lightGray};
  font-size: ${props => props.theme.fontSize.lg};
  cursor: default;
  justify-self: end;
`;
const TodoSuccess = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 8px;
`;
const TodoSuccessText = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-right: 10px;
  white-space: nowrap;
`;
const TodoSuccessBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const BackgroundBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f1f1f1;
  border-radius: ${(props) => props.theme.borderRadius};
`;
const TodoSuccessBar = styled.div<{ success: number }>`
  width: ${(props) => props.success}%;
  height: 12px;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 1px 0 3px ${(props) => props.theme.color.shadow};
`;

export default function TodoOverview() {
  const windowSize = useSelector((state: RootState) => state.appReducer.windowSize);

  const selectedMandalart = useSelector(
    (state: RootState) => state.overviewReducer.selectedMandalart,
  );
  const selectedGoal = useSelector(
    (state: RootState) => state.overviewReducer.selectedGoal,
  );

  return (
    <Base>
      <ContentWrapper>
        <Title color={selectedMandalart.color}>{selectedGoal.text} 성공률</Title>
        <GoalSuccess>
          <SuccessContainer
            size={windowSize * 0.3}
            success={selectedGoal.success}
            color={selectedMandalart.color}
          />
          <GoalSuccessTextWrapper>
            <GoalText>{selectedGoal.text}</GoalText>
            <GoalSuccessText>{selectedGoal.success} %</GoalSuccessText>
          </GoalSuccessTextWrapper>
        </GoalSuccess>
      </ContentWrapper>
      <ContentWrapper id="todos">
        <Title color={selectedMandalart.color}>{selectedGoal.text} 실천과제</Title>
        <Todos>
          {selectedGoal.todos.map((todo) => (
            <TodoItem key={todo.id}>
              <TodoEmojiWrapper>
                <TodoEmoji unified={todo.emoji === "" ? "2754" : todo.emoji} size={windowSize < 480 ? 20 : windowSize < 768 ? 28 : 35} />
              </TodoEmojiWrapper>
              <TodoInfo>
                <TodoText>
                  {todo.text === "" && "실천과제가 등록되지 않았습니다."}
                  {todo.multiple
                    ? `${
                        todo.period === "daily"
                          ? "일"
                          : todo.period === "weekly"
                          ? "주"
                          : "월"
                      } ${todo.periodNumber}${todo.periodText} ${
                        todo.periodRange === "less" ? "이하" : "이상"
                      } ${todo.text}`
                    : todo.text}
                </TodoText>
                {/* <TodoSuccess>
                  <TodoSuccessText>50 %</TodoSuccessText>
                  <TodoSuccessBarWrapper>
                    <BackgroundBar />
                    <TodoSuccessBar
                      success={10}
                      color={selectedMandalart.color}
                    />
                  </TodoSuccessBarWrapper>
                </TodoSuccess> */}
              </TodoInfo>
              <TodoDone className="material-symbols-rounded" done={todo.done}>{todo.done ? "check_circle" : "circle"}</TodoDone>
            </TodoItem>
          ))}
        </Todos>
      </ContentWrapper>
    </Base>
  );
}
