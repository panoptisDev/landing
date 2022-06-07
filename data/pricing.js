const getPricingPageData = () => ({
  meta: {
    title: 'Pricing ',
    description:
      'An open-source, blazingly fast, and hyper-relevant search engine that will improve your search experience',
  },
  hero: {
    preTitle: 'Pricing',
    title: 'Find the perfect plan for a perfect <strong>search</strong>',
    description:
      'Whatever your needs, we can find the right plan that will fit your business perfectly.',
  },
  pricing: {
    openSource: {
      title: 'Open Source',
      plan: 'Free',
      planDescription:
        'Start using Meilisearch now by downloading our open source version. You will have the possibility in the future to move to our cloud easily.',
      cta: {
        title: 'Download',
        href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
        target: '_blank',
      },
    },
    cloud: {
      title: 'Cloud',
      description:
        'Hosted and fully‑managed options for Meilisearch, designed for workflow and business needs.',
      plans: [
        {
          title: 'Dedicated',
          description: 'For production applications.<br/>Starting from ',
          tooltip: {
            cta: '$30/month',
            text: 'Estimation based on $0.042 per hour.',
          },
          keypoints: [
            'Highly available by default',
            'Multiple region available',
            'Up to 128Gb of RAM',
            'Up to 1TB of storage',
          ],
          cta: {
            title: 'Start now',
            href: 'https://meilisearch.typeform.com/to/FtnzvZfh',
            target: '_blank',
          },
        },
        {
          title: 'Enterprise',
          description:
            'Contact our sales team to ask for a fully custom quote.',
          keypoints: ['Premier support', 'Premium SLA', 'More resources'],
          cta: {
            title: 'Contact sales',
            href: 'javascript:$crisp.push(["do", "chat:open"])',
          },
        },
      ],
    },
  },
  table: {
    title: 'Features',
    tables: [
      {
        thead: ['Search Capabilities', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Customizable relevency',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Typo tolerence',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Geosearch capacity',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Sorting results',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Automatic language detection',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Synonyms',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Stop words',
            openSource: true,
            cloud: true,
          },
          {
            title: 'API key management',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Tenant tokens',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Multi-index search',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Filtering',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Faceted search',
            openSource: true,
            cloud: true,
          },
        ],
      },
      {
        thead: ['Project Management', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Interface to browse your documents',
            openSource: 'mini dashboard',
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to configure your search',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to manage your API keys',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to view logs',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to view tasks',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Search analytics',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
        ],
      },
      {
        thead: ['Operational Management', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'High availability',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Server Scaling',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Zero-downtime upgrades',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Continuous backup and recovery',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Service monitoring',
            openSource: false,
            cloud: true,
          },
          {
            title: 'HTTPS/SSL by default',
            openSource: false,
            cloud: true,
          },
          {
            title: 'Custom server configuration',
            openSource: 'Your infrastructure',
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
        ],
      },
      {
        thead: ['Support', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Email support',
            openSource: false,
            cloud: true,
          },
          {
            title: 'SLA for 99.99% uptime',
            openSource: false,
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
          {
            title: 'Premier support',
            openSource: false,
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
        ],
      },
    ],
  },
  faq: {
    title: 'FAQs',
    questions: [
      {
        question: 'What is the best server size for my needs?',
        answer:
          'The size of the machine you need will depend on many factors. The number of documents, the size of those documents, the number of filters/sorts you will need. If you want to get a quick estimate of how big you can get to start with, get a machine that has at least ten times the disk space of your dataset.',
      },
      {
        question: 'Is Meilisearch cloud highly available?',
        answer:
          'Yes, no need to sell you 3 nodes, Meillisearch is highly available by default. It’s totally transparent for you.',
      },
      {
        question:
          'I have never used a search engine before. Can I use Meilisearch anyway?',
        answer:
          "Of course! No knowledge of ElasticSearch or Solr is required to use Meilisearch. Meilisearch is really easy to use and thus accessible to all kinds of developers. Take a quick tour to learn the basics of Meilisearch! We also provide a lot of tools, including SDKs, to help you integrate easily Meilisearch in your project. We're adding new tools every day! Plus, you can contact us if you need any help. We will answer for sure!",
      },
      {
        question: 'Do I need to configure Meilisearch to get it working?',
        answer:
          "Meilisearch configuration works out-of-the-box. It means, by default, Meilisearch configures necessary settings for providing a powerful and relevant search. For example, without requiring any configuration, Meilisearch is typo tolerant. Type \"create an index\" in the documentation search bar to experience the typo tolerance of our search engine. To find out more about the relevancy of Meilisearch, take a look at <a href='https://docs.meilisearch.com/learn/core_concepts/relevancy.html' target='_blank'>this detailed explanation</a>. However, Meilisearch is of course highly customizable in order to adapt the search to your needs by setting synonyms, stop words, and custom ranking rules.",
      },
      {
        question: 'How to know if Meilisearch perfectly fits my use cases?',
        answer:
          "Since Meilisearch is an open-source and easy-to-use tool, you can give it a try using your data. Follow <a href='https://docs.meilisearch.com/learn/getting_started/quick_start.html' target='_blank'>this guide</a> to get a quick start! Besides, we published <a href='https://docs.meilisearch.com/learn/what_is_meilisearch/comparison_to_alternatives.html' target='_blank'>a comparison between Meilisearch and other search engines</a> with the goal of providing an overview of Meilisearch alternatives.",
      },
      {
        question: 'Which languages can Meilisearch handle?',
        answer:
          'Meilisearch works perfectly with English, kanji, and Romance languages. If you have any hesitation about your language handling, please contact us.',
      },
    ],
  },
})

export default getPricingPageData
