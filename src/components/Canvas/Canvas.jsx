import React, { useEffect, useRef } from "react";
import './Canvas.scss';

function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true; // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false;
}

const Canvas = () => {
  // const { draw, ...rest } = props
  const canvasRef = useRef(null);
  const segmentWidth = 100;

  const avgSpeeds = [
    24, 50, 16, 48, 30, 58, 30, 85, 59 
  ];
  const topSpeed = Math.max(...avgSpeeds);
  console.log('topSpeed: ', topSpeed);
  const scale = topSpeed + 50;
  console.log('scale: ', scale);
  const midlleScaleSpeed = scale/2;
  console.log('middle scale speed: ', midlleScaleSpeed);

  const initialValue = 100;

  const draw = (ctx, frameCount) => {
    let drawWidth = 0;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath(); // Start a new path
    ctx.moveTo(0, 0);
    // ctx.lineTo(drawWidth += segmentWidth, 300);
    // ctx.lineTo(drawWidth += segmentWidth, 200);
    // ctx.lineTo(drawWidth += segmentWidth, 320);
    // ctx.lineTo(drawWidth += segmentWidth, 200);
    // ctx.lineTo(drawWidth += segmentWidth, 320);
    // ctx.lineTo(drawWidth += segmentWidth, 240);
    // ctx.lineTo(drawWidth += segmentWidth, 340);
    // ctx.lineTo(drawWidth += segmentWidth, 200);

    ctx.lineTo(drawWidth += 100, initialValue + (avgSpeeds[0] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[1] * 2));
    ctx.fillRect(drawWidth - 7.5, initialValue + (avgSpeeds[0] * 2) - 7.5, 15, 15);
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[2] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[3] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[4] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[5] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[6] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[7] * 2));
    // ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (avgSpeeds[8] * 2));

    avgSpeeds.forEach(speedValue => {
      ctx.lineTo(drawWidth += segmentWidth + 100, initialValue + (speedValue * 2));
      ctx.fillRect(drawWidth - 7.5, initialValue + (speedValue * 2) - 7.5, 15, 15);
    });

    ctx.lineWidth = 1;
    ctx.stroke();

    // ctx.fillRect(100, 292.5, 15, 15);
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;
    context.transform(1, 0, 0, -1, 0, 650);

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas width="2500" height="650" ref={canvasRef} />;
};

export default Canvas;
