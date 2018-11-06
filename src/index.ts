
import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the Nord Theme
 */
const plugin: JupyterLabPlugin<void> = {
  id: 'jupyterlab-nord-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: 'Nord Theme',
      isLight: true,
      load: function() {
        return manager.loadCSS('jupyterlab-nord-theme/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
