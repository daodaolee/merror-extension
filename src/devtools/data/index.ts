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
          type: 'group',
          id: 'groupN',
          direction: 'column',
          children: [{
            type: 'track',
            id: 'trackN',
            direction: 'row',
            children: [
              {
                type: 'element', id: 'element11'
              },
              {
                type: 'element', id: 'element22'
              }]
          }, {
            type: 'track',
            id: 'trackN1',
            direction: 'row',
            children: [
              {
                type: 'element', id: 'element1'
              },
              {
                type: 'element', id: 'element2'
              }]
          },]
        },
        {
          type: 'track',
          id: 'track1',
          direction: 'row',
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
          direction: 'row',
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
          type: 'track', id: 'track3', direction: 'row', children: [{
            type: 'element', id: 'audio'
          },]
        },
        { type: 'track', id: 'track4' },
      ],
    },
  ],
};