// Example usage
export const schema = {
  type: 'root',
  direction: 'row',
  id: 'root',
  children: [
    {
      type: 'group',
      direction: 'row',
      id: 'group1',
      children: [
        {
          type: 'track',
          id: 'track1',
          children: [
            {
              type: 'element', id: 'element1'
            },
            {
              type: 'element', id: 'element2'
            }]
        },
        {
          type: 'track',
          id: 'track2',
          children: [
            {
              type: 'element', id: 'video1'
            },
            {
              type: 'element', id: 'video2'
            }]
        },
      ],
    },
    {
      type: 'group',
      direction: 'row',
      id: 'group2',
      children: [
        {
          type: 'track', id: 'track3', children: [{
            type: 'element', id: 'audio'
          },]
        },
        { type: 'track', id: 'track4' },
      ],
    },
  ],
};