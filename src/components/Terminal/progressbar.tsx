import { styled } from "solid-styled-components";

const ProgressBar = styled.div`
background: rgba(255, 255, 255, 0.4);
border-radius: 0px 0px 12px 12px;
height: 10px;
width: 100%;
position: relative;

span{
 position: absolute;   
 background-color: white;
bg-opacity: 100%;
border-radius: 0px 0px 12px 12px;

}
`

export default ProgressBar;