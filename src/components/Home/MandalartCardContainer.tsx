import React, { useState } from "react";
import { Emoji } from "emoji-picker-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../modules";
import {
  setIsOpenedCreateMandalart,
  setIsOpenedMandalartDetail,
  setSelectedMandalart,
} from "../../modules/mandalartReducer";

import { Icon } from "../../styles/Common";
import { Mandalart } from "../../types";
import MandalartCard from "../common/MandalartCard";

const createCardInduceClick = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;
const iconAnimation = keyframes`
  0% {
    font-size: 50px;
  }
  100% {
    font-size: 52px;
  }
`;

export const Base = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const CreateText = styled.p`
  position: absolute;
  top: 200px;
  left: 150px;
  white-space: nowrap;
  font-family: ${(props) => props.theme.fontFamily.aggro};
  color: ${(props) => props.theme.color.primary};
  z-index: 5;
`;
const CreateIcon = styled(Icon)<{ mandalartLength: number }>`
  position: absolute;
  top: -60px;
  left: -10px;
  animation: ${(props) => props.mandalartLength <= 0 && iconAnimation} 0.3s
    infinite alternate ease-in-out;
  color: ${(props) => props.theme.color.secondary};
`;
const CrateMandalartCard = styled.div<{ mandalartLength: number }>`
  width: 220px;
  height: 220px;
  background-color: ${(props) => props.theme.color.transWhite};
  filter: drop-shadow(4px 4px 4px ${(props) => props.theme.color.shadow});
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
  animation: ${(props) => props.mandalartLength <= 0 && createCardInduceClick}
    0.5s infinite alternate cubic-bezier(0.1, 0.7, 0.1, 0.7);
  &:hover {
    background-color: ${(props) => props.theme.color.white};
    animation-play-state: paused;
  }
`;
export const ItemWrapper = styled.div`
  position: relative;
`;
const AddIcon = styled(Icon)`
  font-size: 80px;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease-in-out;
`;
export const MandalartEmoji = styled(Emoji)``;
export const MandalartAlias = styled.p`
  color: ${(props) => props.theme.color.fontPrimary};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-align: center;
  margin-top: 10px;
`;

export const SuccessStampWrapper = styled.div`
  position: absolute;
  left: -10px;
  z-index: 999;
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-weight: 900;
  color: ${(props) => props.theme.color.primary};
  mix-blend-mode: multiply;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.color.primary};
  padding: 3px;
  transform: rotate(-20deg);
`;
export const SuccessStamp = styled.div`
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.primary};
  padding: 3px 5px 2px 5px;
`;

export const successOrNot = (success: number, difficulty: string) => {
  switch (difficulty) {
    case "hard":
      if (success >= 99) {
        return true;
      } else {
        return false;
      }

    case "normal":
      if (success >= 90) {
        return true;
      } else {
        return false;
      }
    case "easy":
      if (success >= 85) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};

export default function MandalartCardContainer() {
  const myMandalartArr = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );

  const dispatch = useDispatch();

  const onCreateClick = () => {
    dispatch(setIsOpenedCreateMandalart());
  };
  const onCardClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    myMandalart: Mandalart,
  ) => {
    dispatch(setSelectedMandalart(myMandalart));
    dispatch(setIsOpenedMandalartDetail());
  };
  return (
    <Base>
      <ItemWrapper onClick={onCreateClick}>
        {myMandalartArr.length <= 0 && (
          <CreateText>
            <CreateIcon
              mandalartLength={myMandalartArr.length}
              className="material-symbols-rounded"
            >
              ads_click
            </CreateIcon>
            버튼을 눌러 만다라트를 만들어 보세요!
          </CreateText>
        )}
        <CrateMandalartCard mandalartLength={myMandalartArr.length}>
          <AddIcon className="material-symbols-rounded">add</AddIcon>
        </CrateMandalartCard>
      </ItemWrapper>
      {myMandalartArr.map((myMandalart, index) => (
        <ItemWrapper
          key={index}
          onClick={(e: React.SyntheticEvent<HTMLDivElement>) =>
            onCardClick(e, myMandalart)
          }
        >
          {successOrNot(myMandalart.success, myMandalart.difficulty) && (
            <SuccessStampWrapper>
              <SuccessStamp>SUCCESS</SuccessStamp>
            </SuccessStampWrapper>
          )}
          <MandalartCard color={myMandalart.color}>
            <MandalartEmoji unified={myMandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{myMandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
