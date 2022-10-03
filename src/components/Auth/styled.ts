import styled, { css } from "styled-components";
import { Icon } from "../../styles/Common";

export const Base = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  position: relative;
  @media ${(props) => props.theme.windowSize.laptop} {
    width: 100%;
  }
`;
export const Guide = styled.div`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  padding: 0 30px;
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 10px;
  }
`;
export const Greeting = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  margin-bottom: 50px;
  @media ${(props) => props.theme.windowSize.laptop} {
    word-break: keep-all;
  }
`;
export const MandalableMean = styled.div`
  font-family: ${(props) => props.theme.fontFamily.aggro};
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.windowSize.laptop} {
    padding: 0 30px;
  }
`;
export const WordWrapper = styled.div``;
export const Word = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  background-color: ${(props) => props.theme.color.transWhite};
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px ${(props) => props.theme.color.shadow};
  line-height: 30px;
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 10px;
  }
`;
export const Mean = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
  word-break: keep-all;
`;
export const Sign = styled.h3`
  line-height: 50px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 300;
  color: ${(props) => props.theme.color.primary};
  margin: 0 5px;
  @media ${(props) => props.theme.windowSize.mobile} {
    line-height: 30px;
  }
`;
export const Mandalable = styled.h2`
  padding: 5px 20px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  line-height: 30px;
  height: fit-content;
  @media ${(props) => props.theme.windowSize.mobile} {
    padding: 0 10px;
  }
`;
export const Desc = styled.p`
  margin: 40px 0;
  margin-bottom: 100px;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.color.fontPrimary};
  b {
    font-weight: 700;
    color: ${(props) => props.theme.color.primary};
  }
`;
export const Content = styled.div`
  margin-bottom: 80px;
`;
export const ContentTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.primary};
  font-weight: 700;
  margin-bottom: 20px;

  & img {
    margin-right: 20px;
  }
`;
export const ContentItemWrapper = styled.ul`
  text-align: center;
`;
export const ContentItem = styled.li`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 10px;
  word-break: keep-all;

  &::before {
    content: "✔";
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.color.primary};
    font-size: ${(props) => props.theme.fontSize.md};
    margin-right: 10px;
  }
`;

export const CreateMandalartGuideContainer = styled.div`
  position: relative;
`;

export const Arrow = styled(Icon)<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.id === "prev" && 0};
  right: ${(props) => props.id === "next" && 0};
  border-radius: 50%;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 30px;
  z-index: 999;
  transition: all 0.2s ease-in-out;
  text-align: center;

  ${(props) =>
    props.disabled
      ? css`
          color: ${props.theme.color.lightGray};
          cursor: default;
        `
      : css`
          color: ${props.theme.color.primary};
          &:hover {
            font-size: ${(props) => props.theme.fontSize.lg};
            transition: all 0.2s ease-in-out;
          }
        `}
`;

export const CreateMandalartGuideWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  flex: none;
  flex-flow: row nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CreateMandalartGuide = styled.div`
  margin: 0 8%;
  overflow: hidden;
  width: 84%;
  flex: none;
  scroll-snap-align: center;
  background-color: ${(props) => props.theme.color.backgroundSecond};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 30px;
  text-align: center;

  @media ${(props) => props.theme.windowSize.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Step = styled.h4`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  width: fit-content;
  padding: 5px 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const GuideText = styled.p`
  font-weight: 300;
  white-space: pre-wrap;
  word-break: keep-all;
  font-size: ${(props) => props.theme.fontSize.base};

  small {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
export const GuideImg = styled.img`
  width: 60%;
  margin-bottom: 20px;
  @media ${(props) => props.theme.windowSize.mobile} {
    width: 100%;
  }
`;
