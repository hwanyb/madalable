import { Emoji } from "emoji-picker-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import {
  setIsOpenedCreateMandalart,
  setIsOpenedMandalartDetail,
  setSelectedMandalart,
} from "../../modules/mandalartReducer";

import { Icon } from "../../styles/Common";
import { theme } from "../../styles/theme";
import { Mandalart } from "../../types";
import MandalartCard from "../common/MandalartCard";

export const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ItemWrapper = styled.div`
  position: relative;
`;
const AddIcon = styled(Icon)`
  font-size: 80px;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease-in-out; ;
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
  font-family: ${props => props.theme.fontFamily.aggro};
  font-weight: 900;
  color: ${props => props.theme.color.primary};
  mix-blend-mode: multiply;
  border-radius: 10px;
  border: 5px solid ${props => props.theme.color.primary};
  padding: 3px;
  transform: rotate(-20deg);
`;
export const SuccessStamp = styled.div`
  border-radius: 5px;
  border: 2px solid ${props => props.theme.color.primary};
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
        <MandalartCard color={theme.color.transWhite}>
          <AddIcon className="material-symbols-rounded">add</AddIcon>
        </MandalartCard>
      </ItemWrapper>
      {myMandalartArr.map((myMandalart, index) => (
        <ItemWrapper
          key={index}
          onClick={(e: React.SyntheticEvent<HTMLDivElement>) =>
            onCardClick(e, myMandalart)
          }
        >
          {
            successOrNot(myMandalart.success, myMandalart.difficulty) && (
              <SuccessStampWrapper>
                <SuccessStamp>SUCCESS</SuccessStamp>
              </SuccessStampWrapper>
            )
          }
          <MandalartCard color={myMandalart.color}>
            <MandalartEmoji unified={myMandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{myMandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
