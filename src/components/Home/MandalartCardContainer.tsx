import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { setIsOpenCreateMandalart } from "../../modules/mandalartReducer";
import { Icon } from "../../styles/Common";
import MandalartCard from "./MandalartCard";

const Base = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const AddIcon = styled(Icon)`
  font-size: 80px;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease-in-out; ;
`;

export default function MandalartCardContainer() {
  const dispatch = useDispatch();
  const isOpenCreateMandalart = useSelector(
    (state: RootState) => state.mandalartReducer.isOpenCreateMandalart,
  );
  const onCreateClick = () => {
    dispatch(setIsOpenCreateMandalart());
  };

  return (
    <Base>
      <MandalartCard isOpenCreateMandalart={isOpenCreateMandalart} onCreateClick={onCreateClick}>
        <AddIcon className="material-symbols-rounded">add</AddIcon>
      </MandalartCard>
    </Base>
  );
}
