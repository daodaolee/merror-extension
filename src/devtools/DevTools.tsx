import { useState } from 'react';
import Tree from './component/Tree'
import Prop from './component/Prop'
import './DevTools.css'
import { schema } from './data/index.js';
import Preview from './component/Preview';

export const DevTools = () => {

  const [selectNode, setSelectedNode] = useState({})

  const onSelect = (node) => {

    setSelectedNode(node)
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className='flex-1 flex sm:flex-col '>
        <div className='flex-1 p-2 border-r border-[#ddd]'>
          <Tree schema={schema} onSelect={onSelect}/>
        </div>
        <div className='flex-1 h-full flex'>
          <Prop selectNode={selectNode}/>
        </div>
      </div>
      <div className='flex-1 border-t border-[#ddd]'>
        <Preview schema={schema} className="flex" highlightId={selectNode.id}/>
      </div>
      {/* <div className="flex-1 p-2 border-b flex overflow-auto">
        <div className="w-1/3 p-2 overflow-auto border-r">
          <ul>
            <RenderSchemaList schema={schema} onSelect={handleSelect} selectedId={selectedNode?.id} />
          </ul>
        </div>
        <div className="w-1/3 p-2 overflow-auto border-r">
          <RenderSchema schema={schema} selectedId={selectedNode?.id} onSelect={handleSelect} />
        </div>
        <div className="w-1/3 p-2 overflow-auto">
          {selectedNode && (
            <div>
              <h3 className="font-bold">Parameters</h3>
              <pre>{JSON.stringify(selectedNode, null, 2)}</pre>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default DevTools
