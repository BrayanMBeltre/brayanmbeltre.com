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
    date: {
      type: 'date',
      description: 'The date of the project',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project._raw.flattenedPath}`,
    },
  },
}));
var contentlayer_config_default = makeSource({
  contentDirPath: 'projects',
  documentTypes: [Project],
});
export { Project, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-PUYLZO7F.mjs.map
