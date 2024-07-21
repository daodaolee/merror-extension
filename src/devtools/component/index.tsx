// Helper function to generate a random color
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Recursive component to render schema as ul and li
export const RenderSchemaList = ({ schema, onSelect, selectedId }) => {
  const { type, children, id } = schema;

  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <li
      onClick={() => onSelect(schema)}
      className={`p-2 cursor-pointer ${selectedId === id ? 'bg-blue-200' : ''}`}
    >
      {type}
      {hasChildren && (
        <ul className="ml-4">
          {children.map((child, index) => (
            <RenderSchemaList key={index} schema={child} onSelect={onSelect} selectedId={selectedId} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Recursive component to render schema
export const RenderSchema = ({ schema, parentColor, selectedId, onSelect }) => {
  const { type, direction, children, id } = schema;
  const color = parentColor || getRandomColor();

  const containerStyle = {
    display: 'flex',
    flexDirection: direction === 'row' ? 'row' : 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    margin: '5px',
    border: `2px solid ${color}`,
    minWidth: type === 'root' ? '100px' : '30px',
    minHeight: type === 'root' ? '50px' : '30px',
  };

  const hasChildren = Array.isArray(children) && children.length > 0;

  return (
    <div
      style={containerStyle}
      className={`relative ${selectedId === id ? 'border-red-500' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(schema);
      }}
    >
      <span className="absolute top-0 left-0 bg-white p-1">{type}</span>
      {hasChildren &&
        children.map((child, index) => (
          <RenderSchema key={index} schema={child} parentColor={color} selectedId={selectedId} onSelect={onSelect} />
        ))}
    </div>
  );
};
