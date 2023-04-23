// contentlayer.config.js
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
var Project = defineDocumentType(() => ({
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
var contentlayer_config_default = makeSource({
  contentDirPath: './src/data/projects',
  documentTypes: [Project],
});
export { Project, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-IVFMCTKH.mjs.map
