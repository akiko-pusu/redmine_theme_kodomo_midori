const themeInfo = {
  version: '1.0.0',
  author: 'Akiko Takano',
  url: 'https://github.com/akiko-pusu/redmine_theme_kodomo_midori',
  name: 'Kodomo Redmine green version',
  description: 'Redmine theme for kids and children green version.'
}

// Calendar switch label
const calendarSwithcVewName = {
  table: 'date_range',
  ul: 'calendar_view_day'
}

// Script to append "Great Job!" message when access the closed issue.
const setCloseRibbon = () => {
  if (document.body.classList.contains('controller-issues') && document.body.classList.contains('action-show')) {
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
}

// This style is effective only for Redmine 4.0.x or before.
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
  if (document.body.classList.contains('controller-issues') || document.body.classList.contains('action-show')) {
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
      trigger.addEventListener('click', displayStaffRoll, false)
    }
  }
}

const calendarStyleChange = () => {
  let targetElement = document.querySelector('body.controller-calendars.action-show p.buttons')
  if (targetElement) {
    applyCalendarStyle(targetElement)
  }
}

async function displayStaffRoll () {
  let wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'staff_roll_wrapper')

  let main = document.createElement('div')
  main.setAttribute('class', 'staff_roll_main')

  let panel = document.createElement('div')
  panel.setAttribute('class', 'staff_roll')

  let projectName = document.querySelector('span.current-project').textContent
  let project = document.createElement('div')
  project.setAttribute('class', 'project')
  project.innerHTML = projectName
  panel.appendChild(project)

  let members = document.querySelectorAll('div.members p')
  let membersByroll = Array.from(members).map(member => member.innerText)
  for (let i = 0; i < membersByroll.length; i++) {
    let [ rollName, users ] = membersByroll[i].split(': ')
    let userList = users.split(',')

    for (let m = 0; m < userList.length; m++) {
      let rollEntry = document.createElement('div')
      rollEntry.setAttribute('class', 'roll_name')
      rollEntry.innerHTML = rollName

      let content = document.createElement('div')
      content.setAttribute('class', 'name')
      content.innerHTML = userList[m]

      panel.appendChild(rollEntry)
      panel.appendChild(content)
    }
  }

  let info = document.createElement('div')
  info.setAttribute('class', 'staff_roll_info')
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

// Switch calender view and icon
const toggleCalendar = (event) => {
  let calendarUl = document.querySelector('ul.list_cal')
  let calendarTable = document.querySelector('table.cal')

  if (event.target.innerText == 'calendar_view_day') {
    document.cookie = "kodomo_redmine_calender_type=ul"
    event.target.innerHTML = 'date_range'
    calendarTable.style.display = 'none'
    calendarUl.style.display = 'block'
  } else {
    document.cookie = "kodomo_redmine_calender_type=table";
    event.target.innerHTML = 'calendar_view_day'
    calendarTable.style.display = 'block'
    calendarUl.style.display = 'none'
  }
}

// Generate ul calendar and display default view
const applyCalendarStyle = (target) => {
  let listCalendarIcon = document.createElement('a')
  listCalendarIcon.setAttribute('class', 'icon icon-list_calendar material-icons')

  // check cookie
  let cookie = cookieValue()
  listCalendarIcon.innerText = calendarSwithcVewName[cookie]
  target.appendChild(listCalendarIcon)

  let table = document.querySelector('table.cal')

  // day name (mon, sun, tue....)
  let dayNameCells = table.querySelectorAll('thead th:not(.week-number)[scope|="col"]')

  // week-number
  let weekNumbers = table.querySelectorAll('tbody td.week-number')
  let weekName = weekNumbers[0].getAttribute('title')

  let ul = document.createElement('ul')
  ul.style = 'list-style: none'
  ul.setAttribute('class', 'list_cal')

  let cells = table.querySelectorAll('td:not(.week-number)')
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i]
    let wdayIndex = i % 7

    // Add week number
    if (wdayIndex == 0) {
      let weekNumberElement = document.createElement('li')
      weekNumberElement.setAttribute('class', 'week_number')
      weekNumberElement.innerHTML = weekNumbers[i / 7].innerHTML + weekName
      ul.appendChild(weekNumberElement)
    }

    let li = document.createElement('li')
    li.innerHTML = '<div class="day_names"><b>' + dayNameCells[i % 7].innerHTML + '</b></div>'
    li.innerHTML = li.innerHTML + '<div class="issue_days">' + cell.innerHTML + '</div>'

    if (cell.classList.contains('nwday')) {
      li.classList.add('nwday')
    }

    if (cell.classList.contains('odd')) {
      li.classList.add('odd')
    }

    ul.appendChild(li)
  }
  let content = document.getElementById('content')
  table.parentNode.insertBefore(ul, table.nextSibling)

  ul.style = 'display: none;'

  listCalendarIcon.addEventListener('click', toggleCalendar, false)

  // Change initial view
  listCalendarIcon.click()
}

const cookieValue = () => {
  let value = document.cookie.replace(/(?:(?:^|.*;\s*)kodomo_redmine_calender_type\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  if (!value) {
    return 'table'
  }
  return value
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setThemeInfo)
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
  document.addEventListener('DOMContentLoaded', setLoading)
  document.addEventListener('DOMContentLoaded', setIssueStyle)
  document.addEventListener('DOMContentLoaded', projectMembersList)
  document.addEventListener('DOMContentLoaded', calendarStyleChange)
}
