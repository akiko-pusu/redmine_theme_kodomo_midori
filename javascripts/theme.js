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
let wrapper = document.getElementById('wrapper')

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

// Test script to include Vue.js
/*
const dynamicallyLoadScript = (url) => {
  let script = document.createElement('script') // create a script DOM node
  script.src = url // set its src to the provided URL

  document.head.appendChild(script) // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

const VUE_CDN_URL = 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js'
*/

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
  document.addEventListener('DOMContentLoaded', setLoading)
  // dynamicallyLoadScript(VUE_CDN_URL)
}
