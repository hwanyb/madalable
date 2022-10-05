import React from "react";
import { useSelector } from "react-redux";
import { Emoji } from "emoji-picker-react";
import styled from "styled-components";

import { RootState } from "../modules";
import { Icon } from "../styles/Common";
import { Goal, Mandalart, Todo } from "../types";
import { dbService } from "../firebase";

const Base = styled.div`
  color: ${(props) => props.theme.color.fontPrimary};
  position: absolute;
  left: 50px;
  top: 50px;
  width: calc(100% - 60px);
  height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: auto;
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
const TodoDone = styled(Icon)<{ done: boolean }>`
  justify-self: end;
  color: ${(props) =>
    props.done ? props.theme.color.primary : props.theme.color.lightGray};
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
  display: block;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
  &:last-child {
    margin-top: -5px;
  }
`;

export default function TodoContainer() {
  const myMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );

  // 데일리, 위클리, 먼슬리 투두 기능 개발 시 필요한 일수구하기 주수구하기 개월수 구하기 로직
  // const getDays = (start_date: string, end_date: string) => {
  //   const startDate: Date = new Date(start_date);
  //   const endDate: Date = new Date(end_date);

  //   const oneDay = 1000 * 60 * 60 * 24;
  //   const diffInTime = endDate.getTime() - startDate.getTime();
  //   const diffInDays = Math.round(diffInTime / oneDay);
  //   return diffInDays;
  // };
  // const getWeeks = (start_date: string, end_date: string) => {
  //   const startDate: Date = new Date(start_date);
  //   const endDate: Date = new Date(end_date);

  //   const oneWeek = 1000 * 60 * 60 * 24 * 7;
  //   const diffInTime = endDate.getTime() - startDate.getTime();
  //   const diffInWeeks = Math.round(diffInTime / oneWeek);

  //   return diffInWeeks;
  // };
  // const getMonths = (start_date: string, end_date: string) => {
  //   const startDate: Date = new Date(start_date);
  //   const endDate: Date = new Date(end_date);

  //   let diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;

  //   diffInMonths -= startDate.getMonth();
  //   diffInMonths += endDate.getMonth();

  //   if (endDate.getDate() < startDate.getDate()) {
  //     return diffInMonths--;
  //   } else return diffInMonths;
  // };
  const getMandalartSuccess = (mandalart: Mandalart) => {
    const vaildGoal = mandalart.goals.filter((goal) => goal.text !== "");
    const sumSuccess = mandalart.goals.reduce(
      (acc, goal) => acc + goal.success,
      0,
    );
    return Math.ceil(sumSuccess / vaildGoal.length);
  };
  const getGoalSuccess = (goal: Goal) => {
    const validTodo = goal.todos.filter((todo) => todo.text !== "").length;
    const doneTodo = goal.todos.filter((todo) => todo.done === true).length;
    return Math.ceil((doneTodo / validTodo) * 100);
  };

  const onClickDone = async (
    e: React.SyntheticEvent<HTMLSpanElement>,
    myMandalart: Mandalart,
    goal: Goal,
    todo: Todo,
  ) => {
    const newGoals = [...myMandalart.goals];
    newGoals[goal.id - 1].todos[todo.id - 1].done =
      !newGoals[goal.id - 1].todos[todo.id - 1].done;
    newGoals[goal.id - 1].success = getGoalSuccess(goal);
    await dbService
      .collection("mandalable")
      .doc(myMandalart.doc_id)
      .update({
        goals: newGoals,
        success: getMandalartSuccess(myMandalart),
      });
  };
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
              <React.Fragment key={goal.id}>
                <TodoInfo>{goal.text}</TodoInfo>
                {/* <TodoLabel>일회성 과제</TodoLabel> */}
                {goal.todos
                  .filter((todo) => todo.text !== "")
                  .map((todo) => (
                    <TodoItem key={todo.id}>
                      <TodoEmoji unified={todo.emoji} size={40} />
                      <TodoTextWrapper>
                        <TodoText>{todo.text}</TodoText>
                      </TodoTextWrapper>
                      <TodoDone
                        className="material-symbols-rounded"
                        onClick={(e: React.SyntheticEvent<HTMLSpanElement>) =>
                          onClickDone(e, myMandalart, goal, todo)
                        }
                        done={todo.done}
                      >
                        {todo.done ? "check_circle" : "circle"}
                      </TodoDone>
                    </TodoItem>
                  ))}
                {/* <TodoLabel>데일리 과제</TodoLabel>
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
                  ))} */}
                {/* <TodoLabel>위클리 과제</TodoLabel>
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
                  ))} */}
                {/* {goal.todos
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
                  ))} */}
              </React.Fragment>
            ))}
        </TodoWrapper>
      ))}
    </Base>
  );
}
