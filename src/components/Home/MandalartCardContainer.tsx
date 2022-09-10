import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { createMandalart } from "../../modules/mandalart";
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
  const mandalart = useSelector(
    (state: RootState) => state.mandalart.isOpenedCreatMandalart,
  );
  const onCreateClick = () => {
    dispatch(createMandalart());
  };

  return (
    <Base>
      <MandalartCard mandalart={mandalart} onCreateClick={onCreateClick}>
        <AddIcon className="material-symbols-rounded">add</AddIcon>
      </MandalartCard>
    </Base>
  );
}
