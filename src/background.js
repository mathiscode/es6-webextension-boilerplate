import browser from 'webextension-polyfill'

console.log('ES6 WebExtension Boilerplate - Background Script')

// Setup context menus
browser.contextMenus.create({
  id: 'root-menu',
  title: browser.i18n.getMessage('extensionName'),
  contexts: ['all']
})

browser.contextMenus.create({
  id: 'options',
  parentId: 'root-menu',
  title: 'Options',
  contexts: ['all']
})

// Listen for context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'options':
      browser.runtime.openOptionsPage()
      break
  }
})

// Handle changes to options
browser.storage.onChanged.addListener(changes => {
  console.log(changes.options.newValue.dummyOption)
})
