import siteMetadata from "../lib/utility/siteMetadata"

export default function manifest() {
    return {
      name: siteMetadata.title,
      short_name: siteMetadata.title,
      description: siteMetadata.description,
      start_url: '/',
      display: 'standalone',
      /*background_color: '#fff',
      //theme_color: '#fff',*/
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }