import React, { useRef, useEffect, useState } from 'react';

const colors = {
  root: 'bg-gray-400',
  group: 'bg-amber-400',
  track: 'bg-blue-400',
  element: 'bg-green-400',
  highlight: 'bg-gradient-to-r from-purple-500 to-pink-500'
};


const RenderSchemaList = ({ key, schema, highlightId }) => {
  const { type, children, id } = schema;
  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <div className={`border-2 border-[#696868] relative ${highlightId === id ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''} flex ${schema.direction === 'row' ? 'flex-row' : 'flex-col'} ${colors[type]} p-5 ${type === 'element' ? 'w-5 h-5' : ''} gap-3 rounded`}>
      {hasChildren && children.map((child, index) => {
        return <RenderSchemaList
          highlightId={highlightId}
          key={index + id}
          schema={child}
        />
      })
      }
    </div>
  );
};

const Preview = ({ schema, highlightId }) => {
  const [scale, setScale] = useState(1)
  return <div className='flex-1 relative h-full w-full overflow-hidden'>
    {/* 按钮 */}
    <div className='z-20 toolbar absolute bottom-2 right-2 border border-[#ccc] flex cursor-pointer  gap-2 rounded'>
      <div className='w-8 h-8 flex justify-center items-center text-lg text-[#1a1a1a]' onClick={() => {
        setScale(prev => prev + 0.25)
      }}>+</div>
      <div className='w-8 h-8 flex justify-center items-center text-lg text-[#1a1a1a]' onClick={() => {
        setScale(prev => prev - 0.25)
      }}>-</div>
    </div>
    {/* 图例 */}
    <div className='z-20 toolbar absolute bottom-2 left-2 flex '>
      {
        Object.keys(colors).map((item, index) => {
          return <div key={index} className='flex items-center mr-3'>
            <div className={`w-4 h-2 rounded ${colors[item]}`}></div>
            <span className='text-[#1a1a1a]'>&nbsp;{item}</span>
          </div>
        })
      }
    </div>
    {/* 预览区 */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 0
      }}
      className={`preview transition-all bg-[#9CA3AF] flex p-5 gap-3 rounded absolute `}>
      {schema.children?.length > 0 &&
        schema.children.map((child, index) => {
          return <RenderSchemaList
            highlightId={highlightId}
            key={index + child.id}
            schema={child}
          />
        })
      }
    </div>
  </div>

};

export default Preview;
