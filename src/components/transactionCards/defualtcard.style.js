import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const DefaultCardstyle = styled.div`
  padding: ${({ padding }) => (padding ? padding : "13px")};
  text-align: start;
  background: ${({ bg }) => (bg ? bg : colors.bg.white)};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: space-evenly;
  flex-basis: 50%;
  width: ${({ width }) => (width ? width : "270px")};
  box-shadow: 0px 21px 80px #cbd5cb;

  h1 {
    align-self: start;
  }
  label {
    color: ${colors.black.light};
    position: absolute;
    top: -4%;
    left: 8%;
    background: white;
    font-size: 9px;
    box-shadow: 0px 2px 10px white;
    z-index: 1;
  }

  input {
    padding: ${({ padding }) => (padding ? padding : "10.5px")};
    font-weight: 600;
    cursor:pointer;
  }
  

  






input[type="range"]{
  -webkit-appearance:none;
  width:100%;
  height:20px;
  background:linear-gradient(90deg, ${colors.black.light} 60%, ${
  colors.black.light
} 60%);
  outline:none;

  -webkit-transition:0.7s;

  border-radius:5px;
  border:none;
  position: relative;
  overflow: hidden;
  margin-top:23px;
}


input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none;
  width:20px;
  height:20px;
  background:${colors.primary};
  border-bottom-right-right:50%;
  outline:none;
  box-shadow: -100vw 0 0 100vw ${colors.primary};;
  overflow-hidden;
  
}
input[type="range"]::-ms-thumb { 
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}

input[type="range"]::moz-range-thumb{
  wdith:30px;
  height:20px
border-radius:5px;
cursor:pointer;
}










  button {
    padding: 2px;
    margin-top: 14px;
    width: 60%;
    margin-bottom:12px;
  }

  @media only screen and (max-width: 670px) {
    width: 200px;
  }

  @media only screen and (max-width: 350px) {
    width: 150px;
    @media only screen and (max-width: 300px) {
      h1 {
        font-size: 12px;
      }

      label {
        font-size: 7px;
      }
      input {
        padding: 0.3rem;
      }

      button {
        width: 100%;
        padding: 0.1rem;
      }
    }
  }
`;
