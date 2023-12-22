export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {type: 'text', name: 'alt', title: 'Alt'},
            {
              name: 'file',
              title: 'File',
              type: 'file',
              options: {
                accept: 'application/pdf', // Specify the accepted file type(s)
              },
            },
          ],
        },
        {
          name: 'htmlCode',
          title: 'HTML Code',
          type: 'object',
          fields: [
            {
              name: 'code',
              title: 'Code',
              type: 'text',
            },
          ],
        },
        {
          name: 'jsCode',
          title: 'JavaScript Code',
          type: 'object',
          fields: [
            {
              name: 'code',
              title: 'Code',
              type: 'text',
            },
          ],
        },
        {
          name: 'phpCode',
          title: 'PHP Code',
          type: 'object',
          fields: [
            {
              name: 'code',
              title: 'Code',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
