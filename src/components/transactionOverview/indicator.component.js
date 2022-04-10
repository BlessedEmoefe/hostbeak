import styled from "styled-components";

export const Indicator = styled.div`
margin-right:12px;
width:11px;
height:11px;
border-radius:50%;
align-self:baseline;
background:${({bg})=>bg ? bg : ''};
border:${({border})=>border ? border : 'none'};
`