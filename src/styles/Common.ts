import styled from "styled-components";

export const Icon = styled.span`
  font-family: "Material Symbols Rounded";
  cursor: pointer;
  font-variation-settings: "FILL" 0, "wght" 500, "GRAD" 0, "opsz" 40;
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  cursor: pointer;
`;
