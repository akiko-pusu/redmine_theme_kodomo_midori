const themeInfo = {
  version: '0.0.4',
  author: 'Akiko Takano',
  url: 'https://github.com/akiko-pusu/redmine_theme_kodomo_midori',
  name: 'Kodomo Redmine green version',
  description: 'Redmine theme for kids and children green version.'
}

// Script to append "Great Job!" message when access the closed issue.
const setCloseRibbon = () => {
  const closedIssue = document.querySelector('div#content div.issue.closed')
  if (closedIssue) {
    let ribbon = document.createElement('div')
    ribbon.setAttribute('class', 'ribbon-content')

    let ribbonContent = document.createElement('span')
    ribbonContent.setAttribute('class', 'ribbon')
    ribbonContent.innerHTML = '★ Great Job ★'

    ribbon.appendChild(ribbonContent)
    document.body.appendChild(ribbon)
  }
}

let preventEvent = true

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitAction (event) {
  let wrapper = document.getElementById('wrapper')
  if (wrapper && preventEvent) {
    let message = 'Great work!'
    if (this.action === 'login') {
      message = 'Welcome!'
    }

    event.preventDefault()
    event.stopPropagation()
    displayLoading(message)
    await sleep(1500)
    preventEvent = false
    event.target.click()
  }
}

const setThemeInfo = () => {
  let footer = document.querySelector('div.bgr')
  if (footer) {
    let infoText = ''
    if (document.body.classList.contains('controller-account') || document.body.classList.contains('controller-welcome')) {
      infoText = '<div class="theme_description"><pre>'
      for (let key in themeInfo) {
        infoText = infoText + key + ' : ' + themeInfo[key] + '\n'
      }
      infoText = infoText + '</pre></div>'
    }

    let beforeText = '/ Theme: <span id="theme_info">Kodomo Redmine green' + infoText + '</span> version'
    footer.insertAdjacentHTML('beforeend', beforeText)
  }
}

const displayLoading = (message) => {
  let target = document.getElementById('bowl_ringG')
  let wrapper = document.getElementById('wrapper')
  target.setAttribute('style', 'display: block;')
  wrapper.setAttribute('style', 'opacity: 0.2;')
  target.setAttribute('class', 'hide')

  let loadingMsg = document.getElementById('loading_msg')
  if (loadingMsg) {
    loadingMsg.textContent = message
  }
}

const setLoading = (event) => {
  let loginLink = document.querySelector('input#login-submit')
  let logoutLink = document.querySelector('a.logout')

  if (loginLink) {
    loginLink.addEventListener('click', { action: 'login', handleEvent: waitAction }, false)
  }
  if (logoutLink) {
    logoutLink.addEventListener('click', { action: 'logout', handleEvent: waitAction }, false)
  }

  // IE11 not support literal..... ;-(
  /*
  let loaderHtml = `
  <div id="bowl_ringG">
    <div class="ball_holderG">
      <div class="ballG">
      </div>
    </div>
    <span id="loading_msg"></span>
  </div>
  `
  */

  let loaderHtml = '<div id="bowl_ringG">' +
    '<div class="ball_holderG">' +
      '<div class="ballG">' +
      '</div>' +
    '</div>' +
    '<span id="loading_msg"></span>' +
  '</div>'

  let wrapper = document.getElementById('wrapper')
  if (wrapper) {
    wrapper.insertAdjacentHTML('afterend', loaderHtml)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setThemeInfo)
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
  document.addEventListener('DOMContentLoaded', setLoading)
}
