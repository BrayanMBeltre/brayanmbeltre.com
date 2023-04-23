import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the project',
      required: false,
    },

    url: {
      type: 'string',
      description: 'The url of the project',
      required: false,
    },
    featuredImage: {
      type: 'string',
      description: 'The featured image of the project',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => `${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './src/data/projects',
  documentTypes: [Project],
});
