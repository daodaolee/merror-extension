// Example usage
export const schema = {
  type: 'root',
  direction: 'row',
  id: 'root',
  children: [
    {
      type: 'group',
      direction: 'column',
      id: 'group1',
      children: [
        {
          type: 'track', id: 'track1', direction: 'row', children: [{
            type: 'element', id: 'audio1'
          },]
        },
        {
          type: 'track', id: 'track1', direction: 'row', children: [{
            type: 'element', id: 'audio1'
          },]
        },
    
      ],
    },
    {
      type: 'group',
      direction: 'row',
      id: 'group2',
      children: [
        {
          type: 'track', id: 'track3', direction: 'row', children: [{
            type: 'element', id: 'audio'
          },]
        },
       
      ],
    },
  ],
};