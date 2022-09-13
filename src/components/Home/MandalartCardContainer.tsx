import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import mandalartReducer from "../../modules/mandalartReducer";

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
  const myMandalartArr = useSelector((state: RootState) => state.mandalartReducer.myMandalart);
  console.log('myMandalartArr = ', myMandalartArr);
  return (
    <Base>
      <MandalartCard>
        <AddIcon className="material-symbols-rounded">add</AddIcon>
      </MandalartCard>
      {
        myMandalartArr.map((myMandalart, index) => (
          <MandalartCard key={index}>
            {myMandalart.alias}
          </MandalartCard>
        ))
      }
    </Base>
  );
}
