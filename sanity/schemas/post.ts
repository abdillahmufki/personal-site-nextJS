import {defineField, defineType} from 'sanity'

const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fieldsets: [
    {
      name: 'default',
      title: 'Default',
      options: {collapsible: true, collapsed: true},
    },
  ],
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
        defineField({
          name: 'code',
          title: 'Code with all options',
          type: 'code',
          options: {
            theme: 'solarized_dark',
            language: 'javascript',
            languageAlternatives: [
              {title: 'Javascript', value: 'javascript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
            ],
            withFilename: true,
          },
        }),
      ],
    },
  ],
})

export default post
