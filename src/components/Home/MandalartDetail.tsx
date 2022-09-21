import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { dbService } from "../../firebase";
import { RootState } from "../../modules";
import {
  setIsEditingGoal,
  setIsOpenedTodoDetail,
  setSelectedGoal,
  setSelectedTodo,
} from "../../modules/goalReducer";
import { setIsOpenedMandalartDetail } from "../../modules/mandalartReducer";
import { Icon } from "../../styles/Common";
import { Goal, Mandalart, Todo } from "../../types";
import { CloseBtn } from "./CreateMandalart";
import TodoDetail from "./TodoDetail";

const Base = styled.div`
  height: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

export const EditOrSubmitBtn = styled(Icon)`
  width: 30px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 50px;
  right: 100px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.color.gray};
  &:hover {
    color: ${(props) => props.theme.color.primary};
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;
const DeleteBtn = styled(Icon)`
  width: 30px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 50px;
  right: 150px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.color.gray};
  &:hover {
    color: red;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;
const DetailContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-areas:
    "first_goal second_goal third_goal"
    "fourth_goal main_goal fifth_goal"
    "sixth_goal seventh_goal eighth_goal";
  gap: 10px;
  margin: 0 auto;
  & > div:nth-child(1) {
    grid-area: main_goal;
  }
  & > div:nth-child(2) {
    grid-area: first_goal;
  }
  & > div:nth-child(3) {
    grid-area: second_goal;
  }
  & > div:nth-child(4) {
    grid-area: third_goal;
  }
  & > div:nth-child(5) {
    grid-area: fourth_goal;
  }
  & > div:nth-child(6) {
    grid-area: fifth_goal;
  }
  & > div:nth-child(7) {
    grid-area: sixth_goal;
  }
  & > div:nth-child(8) {
    grid-area: seventh_goal;
  }
  & > div:nth-child(9) {
    grid-area: eighth_goal;
  }
`;

const MainGoal = styled.div`
  display: grid;
  grid-template-areas:
    "first_goal second_goal third_goal"
    "fourth_goal main_goal fifth_goal"
    "sixth_goal seventh_goal eighth_goal";
  gap: 5px;
  & > textarea,
  & > div {
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 10px;
    outline: none;
    border: none;
    color: ${(props) => props.theme.color.fontPrimary};
    padding: 2px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  & > div {
    grid-area: main_goal;
  }
  & > textarea:nth-child(2) {
    grid-area: first_goal;
  }
  & > textarea:nth-child(3) {
    grid-area: second_goal;
  }
  & > textarea:nth-child(4) {
    grid-area: third_goal;
  }
  & > textarea:nth-child(5) {
    grid-area: fourth_goal;
  }
  & > textarea:nth-child(6) {
    grid-area: fifth_goal;
  }
  & > textarea:nth-child(7) {
    grid-area: sixth_goal;
  }
  & > textarea:nth-child(8) {
    grid-area: seventh_goal;
  }
  & > textarea:nth-child(9) {
    grid-area: eighth_goal;
  }
`;
const MandalartAlias = styled.div<{
  selectedMandalart: Mandalart;
}>`
  background-color: ${(props) => props.selectedMandalart.color};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 700;
  display: flex;
  align-items: center;
  word-break: break-all;
`;
const GoalInput = styled.textarea`
  background-color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.base};

  &::placeholder {
    color: ${(props) => props.theme.color.lightGray};
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
const TodoText = styled.div`
  background-color: ${(props) => props.theme.color.transWhite};
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.sm};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.color.white};
  }
`;
const GoalWrapper = styled.div`
  transition: all 0.5s ease-in-out;
  display: grid;
  grid-template-areas:
    "first_todo second_todo third_todo"
    "fourth_todo main_todo fifth_todo"
    "sixth_todo seventh_todo eighth_todo";
  gap: 5px;
  opacity: ${(props) => (props.id === "" ? 0.5 : 1)};
  & > ${TodoText} {
    cursor: ${(props) => (props.id === "" ? "defalut" : "pointer")};
  }
  & div {
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 10px;
    outline: none;
    border: none;
    white-space: pre-wrap;
    color: ${(props) => props.theme.color.fontPrimary};
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::-webkit-scrollbar {
      display: none;
    }

    &:nth-child(1) {
      grid-area: main_todo;
    }
    &:nth-child(2) {
      grid-area: first_todo;
    }
    &:nth-child(3) {
      grid-area: second_todo;
    }
    &:nth-child(4) {
      grid-area: third_todo;
    }
    &:nth-child(5) {
      grid-area: fourth_todo;
    }
    &:nth-child(6) {
      grid-area: fifth_todo;
    }
    &:nth-child(7) {
      grid-area: sixth_todo;
    }
    &:nth-child(8) {
      grid-area: seventh_todo;
    }
    &:nth-child(9) {
      grid-area: eighth_todo;
    }
  }
`;
const GoalText = styled.div<{
  selectedMandalart: Mandalart;
}>`
  background-color: ${(props) => props.selectedMandalart.color};
  filter: brightness(1.2) saturate(0.8);
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
`;

export default function MandalartDetail() {
  const dispatch = useDispatch();

  const selectedMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.selectedMandalart,
  );
  const isEditingGoal = useSelector(
    (state: RootState) => state.goalReducer.isEditingGoal,
  );
  const isOpenedTodoDetail = useSelector(
    (state: RootState) => state.goalReducer.isOpenedTodoDetail,
  );

  const [goals, setGoals] = useState<Goal[]>(
    selectedMandalart.goals,
  );

  const onCloseBtnClick = () => {
    if (isEditingGoal) {
      const result = window.confirm(
        "창을 닫으면 입력하신 정보가 사라집니다.\n창을 닫으시겠습니까?",
      );
      if (result) {
        dispatch(setIsEditingGoal());
        dispatch(setIsOpenedMandalartDetail());
      }
    } else {
      dispatch(setIsOpenedMandalartDetail());
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    goalId: number,
  ) => {
    const {
      target: { value },
    } = e;

    const copiedGoals = selectedMandalart.goals
      ? [...selectedMandalart.goals]
      : undefined;
    if (copiedGoals !== undefined) {
      copiedGoals[goalId - 1].text = value;
      setGoals(copiedGoals);
    }
  };
  const onTodoClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    todo: Todo,
    goal: Goal,
  ) => {
    if (e.target instanceof Element) {
      if (e.target.id !== "") {
        dispatch(setSelectedGoal(goal));
        dispatch(setSelectedTodo(todo));
        dispatch(setIsOpenedTodoDetail());
      }
    }
  };

  const onDeleteClick = async () => {
    const result = window.confirm("만다라트를 삭제하시겠습니까?");
    if (result) {
      await dbService
        .collection("mandalable")
        .doc(selectedMandalart.doc_id)
        .delete()
        .then(() => {
          alert("만다라트가 삭제되었습니다");
          dispatch(setIsOpenedMandalartDetail());
        });
    }
  };
  const onSubmitClick = async () => {
    const result = window.confirm("만다라트를 수정하시겠습니까?");
    if (result) {
      await dbService
        .collection("mandalable")
        .doc(selectedMandalart.doc_id)
        .update({
          goals: goals,
        })
        .then(() => {
          dispatch(setIsEditingGoal());
        })
        .catch((error) => {
          alert("다음의 에러로 수정할 수 없습니다.: " + error);
        });
    }
  };

  return (
    <Base>
      <CloseBtn className="material-symbols-rounded" onClick={onCloseBtnClick}>
        close
      </CloseBtn>

      {isEditingGoal ? (
        <EditOrSubmitBtn
          className="material-symbols-rounded"
          onClick={onSubmitClick}
        >
          done
        </EditOrSubmitBtn>
      ) : (
        <EditOrSubmitBtn
          className="material-symbols-rounded"
          onClick={() => dispatch(setIsEditingGoal())}
        >
          edit
        </EditOrSubmitBtn>
      )}
      <DeleteBtn className="material-symbols-rounded" onClick={onDeleteClick}>
        delete
      </DeleteBtn>
      <DetailContainer>
        <MainGoal>
          <MandalartAlias selectedMandalart={selectedMandalart}>
            {selectedMandalart.alias}
          </MandalartAlias>
          {goals?.map((goal) => (
            <GoalInput
              key={goal.id}
              value={goal.text}
              spellCheck={false}
              placeholder={"Goal" + goal.id}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                onChange(e, goal.id)
              }
              disabled={!isEditingGoal}
            />
          ))}
        </MainGoal>
        {goals?.map((goal) => (
          <GoalWrapper key={goal.id} id={goal.text}>
            <GoalText selectedMandalart={selectedMandalart}>
              {goal.text}
            </GoalText>
            {goal?.todos?.map((todo) => (
              <TodoText
                key={todo.id}
                onClick={(e: React.SyntheticEvent<HTMLDivElement>) =>
                  onTodoClick(e, todo, goal)
                }
                id={goal.text}
              >
                {todo.text}
              </TodoText>
            ))}
          </GoalWrapper>
        ))}
      </DetailContainer>
      {isOpenedTodoDetail && <TodoDetail goals={goals} setGoals={setGoals} />}
    </Base>
  );
}
