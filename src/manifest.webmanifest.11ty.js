module.exports = class {
  data() {
    return {
      permalink: '/manifest.webmanifest'
    };
  }

  render({ site }) {
    return JSON.stringify({
      short_name: site.name,
      name: site.name,
      icons: [
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: '/',
      background_color: site.theme_color,
      theme_color: site.theme_color,
      display: 'minimal-ui'
    });
  }
};
