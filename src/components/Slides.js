import React from 'react';
import { useState, useEffect } from 'react';

function Slides({slides}) {
    const [slideIndex, setSlideIndex] = React.useState(0);
    
    useEffect(() => {
        if (slideIndex === 0) {
            document.getElementById("previous").disabled = true;
            document.getElementById("restart").disabled = true;
        }
    });

    const restart = () => {
        if(slideIndex != 0){
            setSlideIndex(0);
            document.getElementById("restart").disabled = true;
        }
    };

    const previous = () => {
        if (slideIndex != 0){
            setSlideIndex(slideIndex - 1);
            document.getElementById("next").disabled = false;
        } else {
            document.getElementById("previous").disabled = true;
            document.getElementById("next").disabled = false;
        }
    }

    const next = () => {
        if (slideIndex != slides.length - 1){
            setSlideIndex(slideIndex + 1);
            document.getElementById("previous").disabled = false;
            document.getElementById("restart").disabled = false;
    } else {
        document.getElementById("next").disabled = true;
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={restart} id="restart" data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={previous} id="previous" data-testid="button-prev" className="small">Prev</button>
                <button onClick={next} id="next" data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}
}
export default Slides;
