import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    /* @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */

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
`;

export default GlobalStyle;