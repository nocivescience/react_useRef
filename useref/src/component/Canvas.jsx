import React, {useRef, useEffect, useState} from "react";
const CanvasElement = () => {
    const canvasRef=useRef(null);
    const inputRef=useRef(null);
    const divRef=useRef(null);
    const widthRef=useRef(null);
    const cuadroRef=useRef(null);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [color, setColor] = useState('black');
    const [lectura, setLectura] = useState('');
    const [widthR, setWidthR] = useState(150);
    const [heightR, setHeightR] = useState(100);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const input = inputRef.current;
        const div = divRef.current;
        const cuadroRef2 = cuadroRef.current;
        function draw(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color;
            ctx.fillRect(xPos, yPos, 150, 100);
        }
        function update(e){
            switch(e.key){
                case 'ArrowUp':
                    setYPos(yPos => yPos - 1);
                    break;
                case 'ArrowDown':
                    setYPos(yPos => yPos + 1);
                    break;
                case 'ArrowLeft':
                    setXPos(xPos => xPos - 1);
                    break;
                case 'ArrowRight':
                    setXPos(xPos => xPos + 1);
                    break;
            }
        }
    }, [xPos, yPos, color, lectura, widthR, heightR]);
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <canvas width="700" height="600"
            ref={canvasRef}
            style={{
                border: '1px solid black',
                borderRadius: '10px',
            }}
            ></canvas>
            <input type="color" 
            ref={inputRef}
            />
            <div
                style={{
                    width: `${widthR}px`,
                    height: `${heightR}px`,
                    border: '1px solid black',
                    backgroundColor: 'red',
                }}
                useRef={cuadroRef2}
            ></div>
        </div>
    )
};
export default CanvasElement;