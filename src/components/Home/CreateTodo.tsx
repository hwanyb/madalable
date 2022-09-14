import React from "react";
import styled from "styled-components";

const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  background: linear-gradient(
    180deg,
    rgba(72, 72, 72, 0.21) 0%,
    rgba(72, 72, 72, 0.5) 100%
  );
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export default function CreateTodo() {
  return <Base>test</Base>;
}
