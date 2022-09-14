import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

@font-face {
    font-family: 'SBAggro';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroLight.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroLight.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroLight.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroLight.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'SBAggro';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroMedium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroMedium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroMedium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroMedium.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'SBAggro';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sandbox/SBAggroBold.ttf') format("truetype");
    font-display: swap;
}
body {
    font-family: 'Noto Sans KR';
}
button {
    border: none;
    outline: none;
    font-family: ${(props) => props.theme.fontFamily.noto};
    filter: drop-shadow(4px 4px 4px ${(props) => props.theme.color.shadow});
    border-radius: ${(props) => props.theme.borderRadius};
    line-height: 30px;
    transition: all 0.2s ease-in;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.base};
    padding: 2px 40px;
    background-color: ${(props) => props.theme.color.transWhite};
    color: ${(props) => props.theme.color.fontPrimary};
    cursor: pointer;
    display: block;
    &:hover {
        font-weight: 700;
        transition: all 0.2s ease-in;
        background-color: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.white};
    }
};
input {
    border: 1px solid ${(props) => props.theme.color.primary};
    outline: none;
    line-height: 30px;
    padding: 2px 40px;
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: 500;
    background-color: transparent;
    font-family: ${(props) => props.theme.fontFamily.noto};
    transition: all 0.2s ease-in;
    &:active {
        border: 2px solid ${(props) => props.theme.color.primary};
    }
};
textarea {
    font-family: 'Noto Sans KR', sans-serif;
    resize: none;
}
`;
export default GlobalStyle;
