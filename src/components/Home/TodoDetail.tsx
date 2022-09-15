import React, { useState } from "react";
import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { Icon } from "../../styles/Common";
import { CloseBtn } from "./CreateMandalart";
import { EditBtn } from "./MandalartDetail";
import { setIsEditingTodo } from "../../modules/goalReducer";
import { useDispatch } from "react-redux";

const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  /* background: linear-gradient(
    180deg,
    rgba(72, 72, 72, 0.21) 0%,
    rgba(72, 72, 72, 0.5) 100%
  ); */
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CreateTodoContainer = styled.div``;
const CurrentInfo = styled.div``;
const CurrenFeat = styled.div``;
const CurrenText = styled.div``;
const BreadCrum = styled.p``;
const Describe = styled.p``;
const SelectedTodoText = styled.h2``;
const CreateTodoForm = styled.form``;
const TodoInfo = styled.div``;
const InfoEmojiPlaceholder = styled.div``;
const TodoText = styled.h2``;
const InputWrapper = styled.div``;
const Label = styled.label``;
const FlexWrapper = styled.div``;
const EmojiBtn = styled.div``;
const EmojiPlaceholder = styled.div``;
const AddIcon = styled(Icon)``;
const PickerWrapper = styled.div``;
const TodoTextInput = styled.input``;
const ToggleBtn = styled.div``;
const ToggleCircle = styled.div``;
const MultipleWrapper = styled.div``;
const PeriodBtn = styled.button``;
const PeriodWrapper = styled.ul``;
const PeriodOption = styled.li``;
const TodoGoalInput = styled.input``;
const TodoGoalBtnWrapper = styled.div``;
const TodoGoalBtn = styled.button``;
const SubmitBtn = styled.button``;

export default function TodoDetail() {
  const dispatch = useDispatch();

  const selectedMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.selectedMandalart,
  );
  const selectedGoal = useSelector(
    (state: RootState) => state.goalReducer.selectedGoal,
  );
  const selectedTodo = useSelector(
    (state: RootState) => state.goalReducer.selectedTodo,
  );
  const isEditingTodo = useSelector(
    (state: RootState) => state.goalReducer.isEditingTodo,
  );

  const [isOpenedEmojiPicker, setIsOpenedEmojiPicker] =
    useState<boolean>(false);

  const selectedTodoText = `${
    selectedTodo.period === "daily"
      ? "일"
      : selectedTodo.period === "weekly"
      ? "주"
      : selectedTodo.period === "monthly"
      ? "월"
      : ""
  } ${selectedTodo.periodNumber === 0 ? "" : selectedTodo.periodNumber} ${
    selectedTodo.periodText
  } ${
    selectedTodo.text === ""
      ? "실천과제가 설정되지 않았습니다."
      : selectedTodo.text
  }`;
  return (
    <Base>
      <CreateTodoContainer>
        <BtnWrapper>
          <CloseBtn
            className="material-symbols-rounded"
            // onClick={onCloseBtnClick}
          >
            close
          </CloseBtn>
          <EditBtn
            className="material-symbols-rounded"
            onClick={() => dispatch(setIsEditingTodo())}
          >
            {isEditingTodo ? "done" : "edit"}
          </EditBtn>
        </BtnWrapper>
        <CurrentInfo>
          <CurrenFeat>
            <Emoji unified={selectedMandalart.emoji} />
          </CurrenFeat>
          <CurrenText>
            <BreadCrum>
              {selectedMandalart.alias} {">"} {selectedGoal.text} {">"} 실천과제{" "}
              {selectedTodo.id}
            </BreadCrum>
            <Describe>
              {isEditingTodo ? "실천과제를 상세히 설정합니다." : ""}
            </Describe>
          </CurrenText>
          <SelectedTodoText>{selectedTodoText}</SelectedTodoText>
        </CurrentInfo>
        {isEditingTodo && (
          <CreateTodoForm>
            <TodoInfo>
              {selectedTodo.emoji === "" ? (
                <InfoEmojiPlaceholder />
              ) : (
                <InfoEmojiPlaceholder>
                  <Emoji unified={selectedTodo.emoji} size={30} />
                </InfoEmojiPlaceholder>
              )}
              <TodoText>
                {selectedTodo.period === "daily"
                  ? "일"
                  : selectedTodo.period === "weekly"
                  ? "주"
                  : selectedTodo.period === "monthly"
                  ? "월"
                  : ""}{" "}
                {selectedTodo.periodNumber !== 0 && selectedTodo.periodNumber}{" "}
                {selectedTodo.periodText}{" "}
                {selectedTodo.periodRange === "more"
                  ? "이상"
                  : selectedTodo.periodRange === "less"
                  ? "이하"
                  : ""}{" "}
                {selectedTodo.text}
              </TodoText>
            </TodoInfo>

            <InputWrapper>
              <Label>실천과제</Label>
              <FlexWrapper>
                <EmojiBtn>
                  <EmojiPlaceholder
                  //   onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  //     onAddEmojiClick(event)
                  //   }
                  >
                    {selectedTodo.emoji !== "" ? (
                      <Emoji
                        unified={selectedTodo.emoji}
                        emojiStyle={EmojiStyle.APPLE}
                        size={24}
                        lazyLoad={true}
                      />
                    ) : (
                      <AddIcon className="material-symbols-rounded">
                        add
                      </AddIcon>
                    )}
                  </EmojiPlaceholder>
                  <p>Emoji</p>
                </EmojiBtn>
                {isOpenedEmojiPicker && (
                  <PickerWrapper>
                    <EmojiPicker
                      // onEmojiClick={onEmojiClick}
                      height={350}
                      width="100%"
                      lazyLoadEmojis={true}
                    />
                  </PickerWrapper>
                )}
                <TodoTextInput
                  autoFocus
                  autoComplete="off"
                  type="text"
                  name="todoText"
                  value={selectedTodo.text}
                  placeholder="실천과제를 입력해 주세요!"
                  // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  //   onChange(event)
                  // }
                />
              </FlexWrapper>
            </InputWrapper>
            <FlexWrapper>
              <Label>
                {selectedTodo.multiple ? "다회성과제" : "일회성과제"}
              </Label>
              <ToggleBtn>
                <ToggleCircle
                //   onClick={onToggle}
                />
              </ToggleBtn>
            </FlexWrapper>
            {selectedTodo.multiple && (
              <MultipleWrapper>
                <InputWrapper>
                  <Label>과제 목표</Label>
                  <FlexWrapper>
                    <PeriodBtn
                    // onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                    //   onPeriodBtnClick(event)
                    // }
                    >
                      {selectedTodo.period === "daily"
                        ? "일"
                        : selectedTodo.period === "weekly"
                        ? "주"
                        : selectedTodo.period === "monthly"
                        ? "월"
                        : "선택"}
                    </PeriodBtn>
                    <PeriodWrapper
                      id="periodUl"
                      // showDropDown={showDropDown}
                      // onClick={(event: React.MouseEvent<HTMLUListElement>) =>
                      //   onPeriodOptionClick(event)
                      // }
                    >
                      <PeriodOption id="daily">일</PeriodOption>
                      <PeriodOption id="weekly">주</PeriodOption>
                      <PeriodOption id="monthly">월</PeriodOption>
                    </PeriodWrapper>
                    <TodoGoalInput
                      autoComplete="off"
                      type="number"
                      name="todoGoalNumber"
                      value={selectedTodo.periodNumber}
                      placeholder="4"
                      // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      //   onChange(event)
                      // }
                    />
                    <TodoGoalInput
                      autoComplete="off"
                      type="text"
                      name="todoGoal"
                      value={selectedTodo.periodText}
                      placeholder="회"
                      // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      //   onChange(event)
                      // }
                    />
                    <TodoGoalBtnWrapper
                    // onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                    //   onRangeClick(event)
                    // }
                    >
                      <TodoGoalBtn
                        //   selectedTodo={selectedTodo}
                        id="less"
                      >
                        이하
                      </TodoGoalBtn>
                      <TodoGoalBtn
                        //   selectedTodo={selectedTodo}
                        id="more"
                      >
                        이상
                      </TodoGoalBtn>
                    </TodoGoalBtnWrapper>
                  </FlexWrapper>
                </InputWrapper>
              </MultipleWrapper>
            )}
            <SubmitBtn
              type="submit"
              //   disabled={!isfilled}
            >
              완료
            </SubmitBtn>
          </CreateTodoForm>
        )}
      </CreateTodoContainer>
    </Base>
  );
}
