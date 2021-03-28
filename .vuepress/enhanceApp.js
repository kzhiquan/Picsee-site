import VLazyImagePlugin from 'v-lazy-image';

export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
  isServer
}) => {

  Vue.use(VLazyImagePlugin);

  if (!isServer) {
    await import('vue-carousel').then(module => {
        Vue.use(module.default);
    });
  }

}