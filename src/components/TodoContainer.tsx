import { Emoji } from "emoji-picker-react";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import { Icon } from "../styles/Common";

const Base = styled.div`
  color: ${(props) => props.theme.color.fontPrimary};
  position: absolute;
  left: 50px;
  top: 50px;
  width: calc(100% - 60px);
  height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    margin-left: 30px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.lightGray};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 10px;
    box-shadow: 2px 2px 3px ${(props) => props.theme.color.shadow};
  }
`;
const MandalartInfo = styled.div`
  display: flex;
  line-height: 15px;
  background-color: ${(props) => props.color};
  width: fit-content;
  padding: 5px 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  filter: drop-shadow(2px 2px 3px ${(props) => props.theme.color.shadow});
  margin-bottom: 10px;
`;
const MandalartEmoji = styled(Emoji)``;
const MandalartAlias = styled.p`
  margin-left: 10px;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 500;
`;

const TodoWrapper = styled.div`
  width: calc(100% - 80px);
  margin-bottom: 30px;
`;
const TodoInfo = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  margin-left: 10px;
  background-color: ${(props) => props.theme.color.lightGray};
  padding: 2px 5px;
  border-radius: ${(props) => props.theme.borderRadius};
  width: fit-content;
  margin-bottom: 10px;
`;
const TodoLabel = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 500;
  margin-left: 30px;
  margin-bottom: 10px;
`;
const TodoItem = styled.div`
  background-color: ${(props) => props.theme.color.transWhite};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  filter: drop-shadow(4px 4px 4px ${(props) => props.theme.color.shadow});
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin-bottom: 20px;
  margin-left: 30px;
  align-items: center;
`;
const TodoEmoji = styled(Emoji)``;
const TodoTextWrapper = styled.div`
  margin-left: 20px;
`;
const TodoText = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.md};
`;
const TodoPeriod = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.base};
`;
const TodoDone = styled(Icon)`
  justify-self: end;
  color: ${(props) => props.theme.color.lightGray};
  font-size: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
const TodoCountWrapper = styled.div`
  justify-self: end;
  width: fit-content;
  text-align: right;
`;
const CountArrow = styled(Icon)`
  color: ${(props) => props.theme.color.lightGray};
  transition: all 0.3s ease-in-out;
  font-size: 30px;

  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export default function TodoContainer() {
  const myMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );
  return (
    <Base>
      {myMandalart.map((myMandalart) => (
        <TodoWrapper key={myMandalart.created_at}>
          <MandalartInfo color={myMandalart.color}>
            <MandalartEmoji unified={myMandalart.emoji} size={15} />
            <MandalartAlias>{myMandalart.alias}</MandalartAlias>
          </MandalartInfo>
          {myMandalart.goals
            .filter((goal) => goal.text !== "")
            .map((goal) => (
              <>
                <TodoInfo>{goal.text}</TodoInfo>
                <TodoLabel>일회성 과제</TodoLabel>
                {goal.todos
                  .filter((todo) => todo.multiple === false && todo.text !== "")
                  .map((todo) => (
                    <>
                      <TodoItem>
                        <TodoEmoji unified={todo.emoji} size={40} />
                        <TodoTextWrapper>
                          <TodoText>{todo.text}</TodoText>
                        </TodoTextWrapper>
                        <TodoDone className="material-symbols-rounded">
                          circle
                        </TodoDone>
                      </TodoItem>
                    </>
                  ))}
                <TodoLabel>데일리 과제</TodoLabel>
                {goal.todos
                  .filter(
                    (todo) =>
                      todo.multiple === true &&
                      todo.period === "daily" &&
                      todo.text !== "",
                  )
                  .map((todo) => (
                    <>
                      <TodoItem>
                        <TodoEmoji unified={todo.emoji} size={40} />
                        <TodoTextWrapper>
                          <TodoText>{todo.text}</TodoText>
                          <TodoPeriod>
                            일 {todo.periodNumber}
                            {todo.periodText}{" "}
                            {todo.periodRange === "less" ? "이하" : "이상"}
                          </TodoPeriod>
                        </TodoTextWrapper>
                        <TodoCountWrapper>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_up
                          </CountArrow>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_down
                          </CountArrow>
                        </TodoCountWrapper>
                      </TodoItem>
                    </>
                  ))}
                <TodoLabel>위클리 과제</TodoLabel>
                {goal.todos
                  .filter(
                    (todo) =>
                      todo.multiple === true &&
                      todo.period === "weekly" &&
                      todo.text !== "",
                  )
                  .map((todo) => (
                    <>
                      <TodoItem>
                        <TodoEmoji unified={todo.emoji} size={40} />
                        <TodoTextWrapper>
                          <TodoText>{todo.text}</TodoText>
                          <TodoPeriod>
                            주 {todo.periodNumber}
                            {todo.periodText}{" "}
                            {todo.periodRange === "less" ? "이하" : "이상"}
                          </TodoPeriod>
                        </TodoTextWrapper>
                        <TodoCountWrapper>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_up
                          </CountArrow>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_down
                          </CountArrow>
                        </TodoCountWrapper>
                      </TodoItem>
                    </>
                  ))}
                {goal.todos
                  .filter(
                    (todo) =>
                      todo.multiple === true &&
                      todo.period === "monthly" &&
                      todo.text !== "",
                  )
                  .map((todo) => (
                    <>
                      <TodoLabel>먼슬리 과제</TodoLabel>
                      <TodoItem>
                        <TodoEmoji unified={todo.emoji} size={40} />
                        <TodoTextWrapper>
                          <TodoText>{todo.text}</TodoText>
                          <TodoPeriod>
                            월 {todo.periodNumber}
                            {todo.periodText}{" "}
                            {todo.periodRange === "less" ? "이하" : "이상"}
                          </TodoPeriod>
                        </TodoTextWrapper>
                        <TodoCountWrapper>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_up
                          </CountArrow>
                          <CountArrow className="material-symbols-rounded">
                            arrow_drop_down
                          </CountArrow>
                        </TodoCountWrapper>
                      </TodoItem>
                    </>
                  ))}
              </>
            ))}
        </TodoWrapper>
      ))}
    </Base>
  );
}
