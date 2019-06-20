import browser from 'webextension-polyfill'

// This will allow you to localize your popup/options html files
export const LocalizeHtml = () => {
  const tags = document.querySelectorAll('[data-localize]')

  for (const i in tags) {
    if (tags.hasOwnProperty(i)) {
      const tag = tags[i].getAttribute('data-localize').toString()
      const msg = tag.replace(/__MSG_(\w+)__/g, (match, msgKey) => {
        return msgKey ? browser.i18n.getMessage(msgKey) : ''
      })

      if (msg !== tag) tags[i].innerHTML = msg
    }
  }
}
