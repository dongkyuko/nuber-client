// 스타일 컴포넌트 설정
// https://www.styled-components.com/docs/api#typescript에 같은 코드 있음
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule  } from "styled-components";

// Interface 타입정의
interface IThemeInterface {
    // primaryColor: string;
    // primaryColorInverted: string;
    blueColor: string;
}

// 스타일 모듈 정의
const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;