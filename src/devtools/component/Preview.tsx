import React, { useRef, useEffect } from 'react';

const colors = {
  root: 'lightgrey',
  group: 'lightblue',
  track: 'lightgreen',
  element: 'lightcoral',
  highlight: 'yellow', // 高亮颜色
};

const padding = 20; // 固定的 padding 值

const Preview = ({ schema, highlightId }) => {
  const canvasRef = useRef(null);

  const drawRect = (ctx, x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  };

  const drawSchema = (ctx, node, x, y, width, height) => {
    const { type, id, direction, children } = node;
    const color = id === highlightId ? colors.highlight : colors[type] || 'white';

    // 计算矩形位置和大小，减去 padding
    const innerWidth = width - 2 * padding;
    const innerHeight = height - 2 * padding;

    drawRect(ctx, x + padding, y + padding, innerWidth, innerHeight, color);

    if (children && children.length > 0) {
      const childWidth = direction === 'row' ? innerWidth / children.length : innerWidth;
      const childHeight = direction === 'column' ? innerHeight / children.length : innerHeight;

      children.forEach((child, index) => {
        const childX = direction === 'row' ? x + padding + childWidth * index : x + padding;
        const childY = direction === 'column' ? y + padding + childHeight * index : y + padding;
        const childW = direction === 'row' ? innerWidth / children.length : innerWidth;
        const childH = direction === 'column' ? innerHeight / children.length : innerHeight;

        drawSchema(ctx, child, childX, childY, childW, childH);
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasSize = 400;

    canvas.width = canvasSize;
    canvas.height = canvasSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    drawSchema(ctx, schema, 0, 0, canvasSize, canvasSize);
    ctx.restore();
  }, [schema, highlightId]); // 依赖项中添加 highlightId

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default Preview;
