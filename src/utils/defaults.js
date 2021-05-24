module.exports = {
  pageInfo: {
    title: 'Dashy',
    description: '',
    navLinks: [
      { title: 'Home', path: '/' },
      { title: 'Source', path: 'https://github.com/Lissy93/dashy' },
    ],
    footerText: '',
  },
  appConfig: {},
  iconSize: 'medium',
  layout: 'auto',
  theme: 'default',
  fontAwesomeKey: '0821c65656',
  builtInThemes: [
    'nord',
    'nord-frost',
    'callisto',
    'thebe',
    'material',
    'material-dark',
    'dracula',
    'matrix',
    'matrix-red',
    'hacker-girl',
    'bee',
    'raspberry-jam',
    'tiger',
    'colorful',
    'high-contrast-light',
    'high-contrast-dark',
  ],
  visibleComponents: {
    pageTitle: true,
    navigation: true,
    searchBar: true,
    settings: true,
    footer: true,
  },
  localStorageKeys: {
    HIDE_WELCOME_BANNER: 'hideWelcomeHelpers',
    LAYOUT_ORIENTATION: 'layoutOrientation',
    COLLAPSE_STATE: 'collapseState',
    ICON_SIZE: 'iconSize',
    THEME: 'theme',
    CONF_SECTIONS: 'confSections',
    PAGE_INFO: 'pageInfo',
    APP_CONFIG: 'appConfig',
    BACKUP_ID: 'backupId',
    BACKUP_HASH: 'backupHash',
  },
  topLevelConfKeys: {
    PAGE_INFO: 'pageInfo',
    APP_CONFIG: 'appConfig',
    SECTIONS: 'sections',
  },
  toastedOptions: {
    position: 'bottom-center',
    duration: 2500,
    keepOnHover: true,
    className: 'toast-message',
    iconPack: 'fontawesome',
  },
  backupEndpoint: 'https://dashy-sync-service.as93.net',
};
