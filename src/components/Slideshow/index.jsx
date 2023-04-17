// Creation du composant Carrousel

import styled from "styled-components";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import { useState } from "react";

const SlideChevron  = styled.div`
    height:120px;
    width:100%;
    position:absolute;
    display:flex;
    justify-contente:space-between;
    top:60%;    
`
const styleLeft = {height:"120px", width:"100%", weight:"700", color:"white",position:"relative", top: "-150%", left:"-15%"};

const styleRight = {height:"120px", width:"100%", weight:"700", color:"white", position:"relative", top: "-150%", right:"-15%"};

const media = {'@media (max-width: 650px)':{height:"20px", position:"relative", top: "-200%", left:"-15%"}}

const SlideImgIconDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    @media (max-width:768px){
        width:30%;
    }   
`
const SlideImgDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`
const SlideImg = styled.img`
    width:86%;
    height:415px;
    object-fit:cover; 
    margin-top:2rem;
    border-radius:25px;
    @media (max-width: 768px){
        border-radius:10px;
        width:87%;
        height:255px;
        margin-top:1rem;
        border-radius:10px;
    }    
`
const SpanNumber = styled.span`
    width:100%;
    display:flex;
    justify-content:center;
    position:absolute;
    top:63%;
    color:white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    @media (max-width: 768px){
        display:none;
    }  
`

function Slider(props){

const [currentIndex, setCurrentIndex] = useState(0);

const slide = props.slide;

const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
};

const nextSlide = () =>{
    const isLastSlide = currentIndex === slide.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex)
};
   
return (
        <div>
            <SlideImgDiv>
                <SlideImg src={slide[currentIndex]} alt =""></SlideImg>
            </SlideImgDiv>
            <SlideChevron style={{ visibility:slide.length -1 === 0 ? 'hidden': 'visible'}}>
                <VscChevronLeft style = {styleLeft}  onClick={prevSlide}/>
                <VscChevronRight style ={styleRight} onClick={nextSlide} />
            </SlideChevron>
            <SlideImgIconDiv style={{visibility:slide.length -1 === 0 ? 'hidden': 'visible'}}>
                <SpanNumber>{currentIndex+1}/{props.slide.length}</SpanNumber>
            </SlideImgIconDiv>
        </div>)

};
export default Slider;

