import { i18n } from '@kbn/i18n';

import exampleRoute from './server/routes/example';

export default function(kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'srirachaiq_purge',
    uiExports: {
      app: {
        title: 'Srirachaiq Purge',
        description: 'SrirachaIQ - Purge Data',
        main: 'plugins/srirachaiq_purge/app',
      },
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    // eslint-disable-next-line no-unused-vars
    init(server, options) {
      const xpackMainPlugin = server.plugins.xpack_main;
      if (xpackMainPlugin) {
        const featureId = 'srirachaiq_purge';

        xpackMainPlugin.registerFeature({
          id: featureId,
          name: i18n.translate('srirachaiqPurge.featureRegistry.featureName', {
            defaultMessage: 'srirachaiq_purge',
          }),
          navLinkId: featureId,
          icon: 'questionInCircle',
          app: [featureId, 'kibana'],
          catalogue: [],
          privileges: {
            all: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
            read: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
          },
        });
      }

      // Add server routes and initialize the plugin here
      exampleRoute(server);
    },
  });
}
