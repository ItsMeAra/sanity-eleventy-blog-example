export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624730edb712426cd8b26ebc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-example-studio',
                  apiId: '3830b988-7c8c-40e8-9df3-1e698176e5d7'
                },
                {
                  buildHookId: '624730ed15527d541f67f44e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-example',
                  apiId: 'f139d19e-7d90-49f4-8edc-65d5af2ee23a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ItsMeAra/sanity-eleventy-blog-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-example.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
