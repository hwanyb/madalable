import React from "react";
import styled from "styled-components";

const SuccessRateWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SuccessRate = styled.div``;
const BackCircle = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #ffffff52;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
`;
const SuccessRateCircle = styled.div<{ success: number; size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: conic-gradient(
    transparent 0% ${(props) => 100 - props.success}%,
    ${(props) => props.color} ${(props) => 100 - props.success}% 100%
  );
  background-size: 150%;
  background-position: center;
  filter: brightness(0.85) saturate(1.3);
  position: absolute;
`;
const FrontCircle = styled.div`
  width: 85%;
  height: 85%;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: auto;
  z-index: 99;
`;
const SuccessRateText = styled.p`
  color: ${(props) => props.theme.color.fontPrimary};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  position: absolute;
  bottom: 10px;
`;

type SuccessProps = {
  color: string;
  success: number;
  size: number;
};

export default function SuccessContainer({
  color,
  success,
  size,
}: SuccessProps) {
  return (
    <SuccessRateWrapper>
      <SuccessRate>
        <BackCircle size={size}>
          <SuccessRateCircle success={success} color={color} size={size} />
          <FrontCircle color={color} />
        </BackCircle>
      </SuccessRate>
      <SuccessRateText>{success} %</SuccessRateText>
    </SuccessRateWrapper>
  );
}
