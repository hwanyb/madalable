import React from "react";
import styled from "styled-components";

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
  return (
    <Base>
      <MandalartCard>
        <AddIcon className="material-symbols-rounded">add</AddIcon>
      </MandalartCard>
    </Base>
  );
}
