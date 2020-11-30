export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'composition-vue3-api',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    `~/plugins/composition-api.js`,
    `~/plugins/date.js`,
    `~/plugins/axios.js`,
    `~/plugins/vue-tooltip.js`,
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  content: {
    editor: '~/.nuxt/content/editor.vue',
    apiPrefix: '_content',
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    nestedProperties: [],
    liveEdit: true,
    markdown: {
      remarkPlugins: [
        'remark-squeeze-paragraphs',
        'remark-slug',
        'remark-autolink-headings',
        'remark-external-links',
        'remark-footnotes'
      ],
      rehypePlugins: [
        'rehype-minify-whitespace',
        'rehype-sort-attribute-values',
        'rehype-sort-attributes',
        'rehype-raw'
      ],
      prism: {
        theme: 'prismjs/themes/prism.css'
      }
    },
    yaml: {},
    csv: {},
    xml: {},
    extendParser: {}
  }
}
