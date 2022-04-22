import { styled } from "solid-styled-components";

const Text = styled.h1`
font-family: 'JetBrains Mono';
font-style: normal;
font-weight: 500;
font-size: 54px;
color: #fff;
line-height: 150 %;
transition: all 0.2s ease-in-out;
cursor: pointer;

@media only screen and (max-width: 400px) {
    font-size: 36px;
}
&:hover{
    color: #fff;
    opacity: 90 % !important;
    padding-left: 10px;
}
`

export default Text;