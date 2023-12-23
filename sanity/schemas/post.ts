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
      name: 'image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
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
                accept: 'application/pdf',
              },
            },
          ],
        },
        {
          name: 'codeBlock',
          title: 'Code Block',
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
