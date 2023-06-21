import React from 'react';

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



    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
