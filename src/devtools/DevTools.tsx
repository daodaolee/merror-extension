import { useState } from 'react';
import Tree from './component/Tree';
import Prop from './component/Prop';
import './DevTools.css';
import { schema } from './data/index.js';
import Preview from './component/canvas';

export const DevTools = () => {
  const [selectedNode, setSelectedNode] = useState({});

  const handleSelect = (node) => {
    setSelectedNode(node);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex sm:flex-col">
        <div className="flex-1 p-2 border-r border-[#ddd]">
          <Tree schema={schema} onSelect={handleSelect} selectedId={selectedNode.id} />
        </div>
        <div className="flex-1 h-full flex">
          <Prop selectNode={selectedNode} />
        </div>
      </div>
      <div className="flex-1 border-t border-[#ddd] flex justify-center items-center">
        <Preview schema={schema} highlightId={selectedNode.id} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default DevTools;
