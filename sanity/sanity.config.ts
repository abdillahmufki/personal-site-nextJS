import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Blog Cms',

  projectId: '3m6hsdp9',
  dataset: 'production',

  plugins: [deskTool(), codeInput(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
