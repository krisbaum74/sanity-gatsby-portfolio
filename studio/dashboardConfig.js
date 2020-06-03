export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ed79ba1691a07b5185511a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n2upaftg',
                  apiId: '30e1d321-c282-4a86-8567-b2a9c22d464f'
                },
                {
                  buildHookId: '5ed79ba1f9a9bc78394318e9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uxqb5b3q',
                  apiId: 'f0374463-adb6-4671-9118-7c731e3ec94b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krisbaum74/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uxqb5b3q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
