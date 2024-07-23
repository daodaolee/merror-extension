import React, { useState } from 'react';
import { Stage, Layer, Group, Rect } from 'react-konva';

const initialColors = {
  root: 'lightblue',
  group: 'lightgreen',
  track: 'lightcoral',
  element: 'lightgoldenrodyellow',
  selected: 'red'
};

const initialDimensions = {
  elementSize: 20,
  spacing: 30,
  padding: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  }
};

const calculateDimensions = (children, direction, dimensions) => {
  const { elementSize, spacing, padding } = dimensions;

  if (!children || children.length === 0) {
    return { width: elementSize + padding.left + padding.right, height: elementSize + padding.top + padding.bottom };
  }

  let width = 0, height = 0;

  children.forEach(child => {
    const { width: childWidth, height: childHeight } = calculateDimensions(child.children, child.direction, dimensions);

    if (direction === 'row') {
      width += childWidth + spacing;
      height = Math.max(height, childHeight);
    } else {
      width = Math.max(width, childWidth);
      height += childHeight + spacing;
    }
  });

  if (direction === 'row') width -= spacing;
  else height -= spacing;

  width += padding.left + padding.right;
  height += padding.top + padding.bottom;

  return { width, height };
};

const RenderNode = ({ x, y, color, selectedColor, schema, dimensions, onSelect, highlightId }) => {
  const { type, direction, children, id } = schema;
  const { elementSize, spacing, padding } = dimensions;
  const { width, height } = calculateDimensions(children, direction, dimensions);
  const isSelected = highlightId === id;

  const handleClick = (e) => {
    e.cancelBubble = true; // Prevent event bubbling
    onSelect(schema);
  };

  return (
    <Group x={x} y={y} onClick={handleClick}>
      <Rect
        width={width}
        height={height}
        fill={isSelected ? selectedColor : color}
        stroke="black"
        strokeWidth={1}
        cornerRadius={5}
        listening={true}
        transitionEnabled={true}
      />
      {children && children.map((child, index) => (
        <RenderNode
          key={child.id}
          x={direction === 'row' ? (index * (width - padding.left - padding.right) / children.length) + padding.left : padding.left}
          y={direction === 'row' ? padding.top : (index * (height - padding.top - padding.bottom) / children.length) + padding.top}
          color={initialColors[child.type]}
          selectedColor={selectedColor}
          schema={child}
          dimensions={dimensions}
          onSelect={onSelect}
          highlightId={highlightId}
        />
      ))}
    </Group>
  );
};

const Demo = ({ schema, highlightId, onSelect }) => {
  const dimensions = { ...initialDimensions, elementSize: 20, spacing: 10, padding: { top: 10, right: 30, bottom: 30, left: 30 } };

  return (
    <div className="flex-1 relative h-full w-full overflow-hidden">
      <Stage width={window.innerWidth} height={window.innerHeight} style={{ background: '#9CA3AF', transition: 'all 0.3s ease-in-out' }}>
        <Layer>
          <RenderNode
            x={dimensions.padding.left}
            y={dimensions.padding.top}
            color={initialColors[schema.type]}
            selectedColor={initialColors.selected}
            schema={schema}
            dimensions={dimensions}
            onSelect={onSelect}
            highlightId={highlightId}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Demo;
