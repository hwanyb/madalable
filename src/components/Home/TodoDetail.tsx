import React, { useState, useEffect } from "react";
import EmojiPicker, {
  Emoji,
  EmojiClickData,
  EmojiStyle,
} from "emoji-picker-react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { RootState } from "../../modules";
import { Icon } from "../../styles/Common";
import { CloseBtn } from "./CreateMandalart";
import { EditOrSubmitBtn, GoalProps } from "./MandalartDetail";
import {
  setIsEditingTodo,
  setIsOpenedTodoDetail,
  setSelectedTodo,
} from "../../modules/goalReducer";
import { useDispatch } from "react-redux";

const Base = styled.div<{ rgba: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.rgba};
  backdrop-filter: blur(10px);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const CreateTodoContainer = styled.div<{ isEditingTodo: boolean }>`
  position: relative;
  width: ${(props) => (props.isEditingTodo ? "80vw" : "fit-content")};
  height: ${(props) => (props.isEditingTodo ? "70vh" : "fit-content")};
  background-color: ${(props) => props.theme.color.transWhite};
  border-radius: 50px;
  padding: ${(props) => (props.isEditingTodo ? "60px 0" : "100px")};
  transition: all 0.5s ease-in-out;
  box-shadow: 4px 4px 10px ${(props) => props.theme.color.shadow};
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999999;
`;
const CurrentInfo = styled.div<{ isEditingTodo: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.isEditingTodo
      ? css`
          margin-left: 80px;
        `
      : css`
          margin: 0 auto;
        `}
`;
const CurrenFeat = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  line-height: 36px;
  margin-right: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 24px !important;
    height: 24px !important;
    font-size: 24px !important;
  }
`;
const CurrenText = styled.div`
  text-align: left;
  color: ${(props) => props.theme.color.fontPrimary};
`;
const BreadCrum = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
`;
const Describe = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  margin-top: 5px;
`;

const CreateTodoForm = styled.form`
  width: 60vw;
  margin: 0 auto;
  color: ${(props) => props.theme.color.fontPrimary};
`;
const TodoInfo = styled.div<{ isEditingTodo: boolean }>`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isEditingTodo ? "flex-start" : "center"};
  margin: 40px 0 ${(props) => (props.isEditingTodo ? "50px" : 0)} ${(props) => (props.isEditingTodo ? "80px" : 0)};
  color: ${(props) => props.theme.color.fontPrimary};
`;
const InfoEmojiPlaceholder = styled.div`
  margin-right: 10px;
`;
const TodoText = styled.h2``;
const InputWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  & > label {
    margin-bottom: 15px;
  }
`;
const Label = styled.label`
  display: inline-block;
  margin-right: 20px;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  color: ${(props) => props.theme.color.fontPrimary};
`;
const FlexWrapper = styled.div`
  position: relative;
  display: flex;
`;
const EmojiBtn = styled.div`
  background-color: ${(props) => props.theme.color.transWhite};
  filter: drop-shadow(4px 4px 4px ${(props) => props.theme.color.shadow});

  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-right: 20px;
  height: 30px;
`;
const EmojiPlaceholder = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};
  line-height: 35px;
  & > span,
  & > img {
    margin-top: -3px;
    vertical-align: middle !important;
  }
`;
const AddIcon = styled(Icon)`
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.color.fontPrimary};
  &:hover {
    transform: rotate(90deg) scale(1.2);
    transition: all 0.3s ease-in-out;
    color: ${(props) => props.theme.color.white};
  }
`;
const PickerWrapper = styled.div`
  width: 600px;
  z-index: 100;
  position: absolute;
  text-align: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius};
  top: 50px;
  box-shadow: 4px 4px 4px ${(props) => props.theme.color.shadow};
`;
const TodoTextInput = styled.input`
  border: 1px solid ${(props) => props.theme.color.gray};
  width: 500px;
  margin-left: 10px;
  transition: all 0.5s ease-in-out;
  padding: 0 20px;
  &::placeholder {
    font-weight: 300;
    color: ${(props) => props.theme.color.lightGray};
  }
  &:focus {
    transition: all 0.5s ease-in-out;
    border: 1px solid ${(props) => props.color};
  }
`;
const ToggleBtn = styled.div<{ isMultiple: boolean }>`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  justify-content: ${(prop) => (prop.isMultiple ? "end" : "start")};
  transition: all 0.3s ease-in-out;
`;
const ToggleCircle = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 50%;
  box-shadow: 2px 2px 2px ${(props) => props.theme.color.shadow};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const MultipleWrapper = styled.div<{ isMultiple: boolean }>`
  ${(props) =>
    props.isMultiple
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  transition: all 0.3s 0.3s ease-in-out;
`;
const PeriodBtn = styled.button<{ period: string }>`
  white-space: nowrap;
  width: 60px;
  margin-right: 10px;
  z-index: 60;
  padding: 0 10px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.period === ""
      ? css`
          font-weight: 500;
          background-color: ${props.theme.color.transWhite};
        `
      : css`
          font-weight: 700;
          background-color: ${props.color};
        `}
  &:hover {
    background-color: ${(props) => props.color};
  }
`;
const PeriodWrapper = styled.ul<{ showDropDown: boolean }>`
  opacity: ${(props) => (props.showDropDown ? 1 : 0)};
  position: absolute;
  transform: translateY(${(props) => (props.showDropDown ? "20px" : 0)});
  max-height: ${(props) => (props.showDropDown ? "200px" : 0)};
  background-color: ${(props) => props.theme.color.transWhite};
  width: 50px;
  border-radius: 0 0 20px 20px;
  text-align: center;
  padding: 15px 5px 5px 5px;
  z-index: 55;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.5s ease-in-out;
  & > li {
    transform: translateY(${(props) => (props.showDropDown ? 0 : "-20px")});
    opacity: ${(props) => (props.showDropDown ? 1 : 0)};
    transition: all 0.5s ease-in-out;
  }
`;
const PeriodOption = styled.li`
  color: ${(props) => props.theme.color.fontPrimary};
  margin: 2px 0;
  border-radius: 30px;
  line-height: 25px;
  transition: all 0.5s ease-in-out;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.fontPrimary};
  cursor: pointer;
  &:hover {
    font-weight: 500;
    background-color: ${(props) => props.theme.color.lightGray};
    transition: all 0.2s ease-in-out;
  }
`;
const TodoGoalInput = styled.input`
  border: 1px solid ${(props) => props.theme.color.gray};
  width: ${(props) => (props.name === "todoGoalNumber" ? "40px" : "50px")};
  margin-right: 10px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  padding: 0;
  &::placeholder {
    font-weight: 300;
    color: ${(props) => props.theme.color.lightGray};
  }
  &:focus {
    transition: all 0.5s ease-in-out;
    border: 1px solid ${(props) => props.color};
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const TodoGoalBtnWrapper = styled.div`
  margin-left: 10px;
  display: flex;
`;
const TodoGoalBtn = styled.button<{ periodRange: string }>`
  margin-right: 10px;
  padding: 0 15px;
  ${(props) =>
    props.periodRange === props.id &&
    css`
      background-color: ${props.color};
      font-weight: 700;
    `}
  &:hover {
    background-color: ${(props) => props.color};
    font-weight: 500;
  }
`;
const SubmitBtn = styled.button`
  margin-top: 20px;
  ${(props) =>
    props.disabled
      ? css`
          cursor: default;
          color: ${props.theme.color.lightGray};
          &:hover {
            font-weight: 500;
            background-color: ${props.theme.color.transWhite};
            color: ${props.theme.color.lightGray};
          }
        `
      : css`
          &:hover {
            background-color: ${props.color};
          }
        `};
`;
interface Props {
  goals: GoalProps[] | undefined;
  setGoals: React.Dispatch<React.SetStateAction<GoalProps[] | undefined>>;
}
const TodoDetail: React.FC<Props> = ({ goals, setGoals }) => {
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
  const isEditingGoal = useSelector(
    (state: RootState) => state.goalReducer.isEditingGoal,
  );

  const [isOpenedEmojiPicker, setIsOpenedEmojiPicker] =
    useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [isfilled, setIsfilled] = useState<boolean>(false);

  const copiedSelectedTodo = { ...selectedTodo };

  useEffect(() => {
    const values = Object.values(selectedTodo);
    if (selectedTodo.multiple) {
      if (values.includes("")) {
        setIsfilled(false);
      } else {
        setIsfilled(true);
      }
    } else {
      if (selectedTodo.emoji === "" || selectedTodo.text === "") {
        setIsfilled(false);
      } else {
        setIsfilled(true);
      }
    }
  });

  const color = selectedMandalart.color;
  const rgba = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
    color.slice(3, 5),
    16,
  )}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`;

  const onAddEmojiClick = () => {
    setIsOpenedEmojiPicker(true);
  };
  const onEmojiClick = (emojiData: EmojiClickData) => {
    copiedSelectedTodo.emoji = emojiData.unified;
    dispatch(setSelectedTodo(copiedSelectedTodo));
    setIsOpenedEmojiPicker(false);
    console.log(selectedTodo);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value, valueAsNumber },
    } = e;
    if (name === "todoText") {
      copiedSelectedTodo.text = value;
    } else if (name === "todoGoal") {
      copiedSelectedTodo.periodText = value;
    } else if (name === "todoGoalNumber") {
      copiedSelectedTodo.periodNumber = valueAsNumber;
    }
    dispatch(setSelectedTodo(copiedSelectedTodo));
  };

  const onToggle = () => {
    copiedSelectedTodo.multiple = !copiedSelectedTodo.multiple;
    dispatch(setSelectedTodo(copiedSelectedTodo));
  };

  const onPeriodOptionClick = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof Element) {
      const id = e.target.id;
      copiedSelectedTodo.period = id;
      dispatch(setSelectedTodo(copiedSelectedTodo));
    }
    setTimeout(() => {
      setShowDropDown(!showDropDown);
    }, 100);
  };

  const onRangeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target instanceof Element) {
      const id = e.target.id;
      copiedSelectedTodo.periodRange = id;
      dispatch(setSelectedTodo(copiedSelectedTodo));
    }
  };

  const onCloseBtnClick = () => {
    if(isEditingTodo){
      const result = window.confirm(
        "창을 닫으면 입력하신 정보가 사라집니다.\n창을 닫으시겠습니까?",
      );
      if (result) {
        dispatch(setIsEditingTodo());
        dispatch(setIsOpenedTodoDetail());
      }
    }else{
      dispatch(setIsOpenedTodoDetail());
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedTodo.multiple) {
      var confirmText = `아래 정보로 실천과제 ${
        selectedTodo.id
      }를 생성하시겠습니까?\n${
        selectedTodo.period === "daily"
          ? "일"
          : selectedTodo.period === "weekly"
          ? "주"
          : "월"
      } ${selectedTodo.periodNumber} ${selectedTodo.periodText} ${
        selectedTodo.text
      }`;
    } else {
      var confirmText = `아래 정보로 실천과제 ${selectedTodo.id}를 생성하시겠습니까?\n${selectedTodo.text}`;
    }
    const result = window.confirm(confirmText);

    if (result) {
      const copiedGoal = [...goals];
      copiedGoal[selectedGoal.id - 1].todos[selectedTodo.id - 1] = selectedTodo;
      setGoals(copiedGoal);
      dispatch(setIsEditingTodo());
    }
  };

  return (
    <Base rgba={rgba}>
      <CreateTodoContainer isEditingTodo={isEditingTodo}>
        <BtnWrapper>
          <CloseBtn
            className="material-symbols-rounded"
            onClick={onCloseBtnClick}
          >
            close
          </CloseBtn>
          {!isEditingTodo && isEditingGoal && (
            <EditOrSubmitBtn
              className="material-symbols-rounded"
              onClick={() => dispatch(setIsEditingTodo())}
            >
              edit
            </EditOrSubmitBtn>
          )}
        </BtnWrapper>
        <CurrentInfo isEditingTodo={isEditingTodo}>
          <FlexWrapper>
            <CurrenFeat color={color}>
              <Emoji unified={selectedMandalart.emoji} />
            </CurrenFeat>
            <CurrenText>
              <BreadCrum>
                {selectedMandalart.alias} {">"} {selectedGoal.text} {">"}{" "}
                실천과제 {selectedTodo.id}
              </BreadCrum>
              <Describe>
                {isEditingTodo ? "실천과제를 상세히 설정합니다." : ""}
              </Describe>
            </CurrenText>
          </FlexWrapper>
          <TodoInfo isEditingTodo={isEditingTodo}>
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
              {selectedTodo.periodText === ""}{" "}
              {selectedTodo.periodRange === "more"
                ? "이상"
                : selectedTodo.periodRange === "less"
                ? "이하"
                : ""}{" "}
              {selectedTodo.text === ""
                ? isEditingTodo
                  ? "　"
                  : "실천과제를 설정하지 않았습니다."
                : selectedTodo.text}
            </TodoText>
          </TodoInfo>
        </CurrentInfo>
        {isEditingTodo && (
          <CreateTodoForm
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
          >
            <InputWrapper>
              <Label>실천과제</Label>
              <FlexWrapper>
                <EmojiBtn>
                  <EmojiPlaceholder color={color} onClick={onAddEmojiClick}>
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
                      onEmojiClick={onEmojiClick}
                      height={350}
                      width="100%"
                      lazyLoadEmojis={true}
                    />
                  </PickerWrapper>
                )}
                <TodoTextInput
                  color={color}
                  autoFocus
                  autoComplete="off"
                  type="text"
                  name="todoText"
                  value={selectedTodo.text}
                  placeholder="실천과제를 입력해 주세요!"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(e)
                  }
                />
              </FlexWrapper>
            </InputWrapper>
            <FlexWrapper>
              <Label>
                {selectedTodo.multiple ? "다회성과제" : "일회성과제"}
              </Label>
              <ToggleBtn isMultiple={selectedTodo.multiple} color={color}>
                <ToggleCircle onClick={onToggle} />
              </ToggleBtn>
            </FlexWrapper>
            <MultipleWrapper isMultiple={selectedTodo.multiple}>
              <InputWrapper>
                <Label>과제 목표</Label>
                <FlexWrapper>
                  <PeriodBtn
                    period={selectedTodo.period}
                    color={color}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDropDown(true);
                    }}
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
                    showDropDown={showDropDown}
                    onClick={(e: React.MouseEvent<HTMLUListElement>) =>
                      onPeriodOptionClick(e)
                    }
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e)
                    }
                    color={color}
                  />
                  <TodoGoalInput
                    autoComplete="off"
                    type="text"
                    name="todoGoal"
                    value={selectedTodo.periodText}
                    placeholder="회"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e)
                    }
                    color={color}
                  />
                  <TodoGoalBtnWrapper
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      onRangeClick(e)
                    }
                  >
                    <TodoGoalBtn
                      color={color}
                      periodRange={selectedTodo.periodRange}
                      id="less"
                    >
                      이하
                    </TodoGoalBtn>
                    <TodoGoalBtn
                      color={color}
                      periodRange={selectedTodo.periodRange}
                      id="more"
                    >
                      이상
                    </TodoGoalBtn>
                  </TodoGoalBtnWrapper>
                </FlexWrapper>
              </InputWrapper>
            </MultipleWrapper>
            <SubmitBtn type="submit" disabled={!isfilled} color={color}>
              완료
            </SubmitBtn>
          </CreateTodoForm>
        )}
      </CreateTodoContainer>
    </Base>
  );
};
export default TodoDetail;