import { Emoji } from "emoji-picker-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dbService } from "../../firebase";
import { RootState } from "../../modules";
import {
  setIsOpenedCreateMandalart,
  setIsOpenedMandalartDetail,
  setSelectedMandalart,
} from "../../modules/mandalartReducer";

import { Icon } from "../../styles/Common";
import { theme } from "../../styles/theme";
import MandalartCard from "../common/MandalartCard";

export const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const ItemWrapper = styled.div``;
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
export interface selectedMandalart {
  doc_id: string;
  alias: string;
  emoji: string;
  color: string;
  start_date: string;
  end_date: string;
  difficulty: string;
  user_id: string;
  created_at: number;
  success: number;
}
export default function MandalartCardContainer() {
  const myMandalartArr = useSelector(
    (state: RootState) => state.mandalartReducer.myMandalart,
  );
  const goalsArr = useSelector(
    (state: RootState) => state.goalReducer.goalsArr,
  );

  const dispatch = useDispatch();

  const onCreateClick = () => {
    dispatch(setIsOpenedCreateMandalart());
  };
  const onCardClick = (
    e: React.SyntheticEvent<HTMLDivElement>,
    myMandalart: selectedMandalart,
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
          <MandalartCard color={myMandalart.color}>
            <MandalartEmoji unified={myMandalart.emoji} size={70} />
          </MandalartCard>
          <MandalartAlias>{myMandalart.alias}</MandalartAlias>
        </ItemWrapper>
      ))}
    </Base>
  );
}
