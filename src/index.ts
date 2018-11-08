// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter Light Theme. Modified for nord Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/jupyterlab-nord-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    const style = '@jupyterlab/jupyterlab-nord-theme/index.css';

    manager.register({
      name: 'Nord Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
