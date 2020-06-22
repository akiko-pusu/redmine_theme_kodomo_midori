const themeInfo = {
  version: '0.0.9',
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

const displayChangeSets = () => {
  let changeSets = document.querySelectorAll('div#issue-changesets > div.changeset')
  if (changeSets == undefined) {
    return false
  }

  for (let i = 0; i < changeSets.length; i++) {
    let changeSet = changeSets[i]
    if (changeSet.style.display == 'block') {
      changeSet.style.display = 'none'
    } else {
      changeSet.style.display = 'block'
    }
  }
}

const setIssueStyle = () => {
  if (document.body.classList.contains('controller-issue') || document.body.classList.contains('action-show')) {
    const changeSetheader = document.querySelector('div#issue-changesets > h3')
    if (changeSetheader) {
      changeSetheader.addEventListener('click', displayChangeSets, false)
    }
  }
}

let preventEvent = true

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function waitAction (event) {
  let wrapper = document.getElementById('wrapper')
  if (wrapper && preventEvent) {
    setLoadingHtml()
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
  let footer = document.querySelector('div.bgr') ? document.querySelector('div.bgr') : document.querySelector('div#footer')
  if (footer) {
    let infoText = ''
    const classList = document.body.classList
    if (classList.contains('controller-account') ||
        classList.contains('controller-welcome') ||
        (classList.contains('controller-admin') && classList.contains('action-info'))) {
      infoText = '<div class="theme_description"><pre>'
      for (let key in themeInfo) {
        infoText = infoText + key + ' : ' + themeInfo[key] + '\n'
      }
      infoText = infoText + '</pre></div>'
    }

    let beforeText = '/ Theme: <span id="theme_info"><a href="' + themeInfo['url'] +
      '" rel="noopener noreferrer" target="_blank">Kodomo Redmine green</a>' + infoText + '</span> version'
    footer.innerHTML += beforeText

    // hide Wiki
    let wiki = document.querySelector('body.controller-welcome.action-index div#content div.splitcontentleft > .wiki')
    if (wiki != undefined && wiki.innerText === '') {
      wiki.setAttribute('style', 'display: none;')
    }
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
}

const setLoadingHtml = () => {
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

const projectMembersList = () => {
  if (document.body.classList.contains('controller-projects') && document.body.classList.contains('action-show')) {
    const trigger = document.querySelector('div.members.box > h3.icon.icon-group')
    if (trigger) {
      trigger.addEventListener('click', displayStaffRole, false)
    }
  }
}

async function displayStaffRole () {
  let wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'staff_role_wrapper')

  let main = document.createElement('div')
  main.setAttribute('class', 'staff_role_main')

  let panel = document.createElement('div')
  panel.setAttribute('class', 'staff_role')

  let projectName = document.querySelector('span.current-project').textContent
  let project = document.createElement('div')
  project.setAttribute('class', 'project')
  project.innerHTML = projectName
  panel.appendChild(project)

  let members = document.querySelectorAll('div.members p')
  let membersByRole = Array.from(members).map(member => member.innerText)
  for (let i = 0; i < membersByRole.length; i++) {
    let [ roleName, users ] = membersByRole[i].split(': ')
    let userList = users.split(',')

    for (let m = 0; m < userList.length; m++) {
      let roleEntry = document.createElement('div')
      roleEntry.setAttribute('class', 'role_name')
      roleEntry.innerHTML = roleName

      let content = document.createElement('div')
      content.setAttribute('class', 'name')
      content.innerHTML = userList[m]

      panel.appendChild(roleEntry)
      panel.appendChild(content)
    }
  }

  let info = document.createElement('div')
  info.setAttribute('class', 'staff_role_info')
  info.innerText = 'Enjoy our project!'

  main.appendChild(panel)
  wrapper.appendChild(main)
  wrapper.appendChild(info)
  document.getElementById('wrapper').setAttribute('style', 'opacity: 0.4;')
  document.body.appendChild(wrapper)

  wrapper.addEventListener('click', function () {
    wrapper.parentNode.removeChild(wrapper)
    document.getElementById('wrapper').setAttribute('style', 'opacity: 1;')
  })

  await sleep(60000)
  wrapper.click()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setThemeInfo)
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
  document.addEventListener('DOMContentLoaded', setLoading)
  document.addEventListener('DOMContentLoaded', setIssueStyle)
  document.addEventListener('DOMContentLoaded', projectMembersList)
}
