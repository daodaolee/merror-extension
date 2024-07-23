import { useState } from "react";

const RenderSchemaList = ({ showLine, key, schema, onSelect, selectedId }) => {
  const { type, children, id } = schema;
  const hasChildren = Array.isArray(children) && children.length > 0;

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(schema);
  };

  return (
    <div className="relative">
      {showLine && (
        <div className="absolute left-[15px] top-[25px] h-[calc(100%-15px)] w-[1px] bg-[#ddd] z-0"></div>
      )}
      <div
        onClick={handleClick}
        className={`cursor-pointer hover:bg-[#77af8f] group/item transition-colors relative pl-4 rounded-lg flex items-center ${selectedId === id ? 'bg-[#77af8f] text-[#F2F8F5]' : ''}`}
      >
        <div className={`flex items-center transition-colors`}>
          <span className="text-[#AEB4BC] text-sm">{"<"}</span>
          <span className={`transition-colors text-[#8FCBA9] group-hover/item:text-[#F2F8F5] text-base ${selectedId === id ? 'text-[#F2F8F5]' : ''}`}>{type}</span>
          <span className="text-[#AEB4BC]">{">"}</span>
        </div>
        {!hasChildren && (
          <div className="transition-colors ml-4 bg-[#70A3F3] px-1 rounded-lg flex items-center">
            <span className="text-[10px] text-[#F2F8F5]">{id}</span>
          </div>
        )}
      </div>
      {hasChildren && (
        <div className="pl-4">
          {children.map((child, index) => (
            <RenderSchemaList
              showLine={index !== children.length - 1}
              key={index}
              schema={child}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({ schema, onSelect, selectedId }) => {
  const handleSelect = (node) => {
    onSelect && onSelect(node);
  };

  return (
    <div className="overflow-auto">
      <div className="px-2">
        <span className="text-[#AEB4BC] text-sm">{"<"}</span>
        <span className="text-[#8FCBA9] text-base">{schema.type}</span>
        <span className="text-[#AEB4BC]">{">"}</span>
      </div>
      {schema.children?.length > 0 && (
        <div>
          {schema.children.map((child, index) => (
            <RenderSchemaList
              showLine={index !== schema.children.length - 1}
              key={index}
              schema={child}
              onSelect={handleSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;
