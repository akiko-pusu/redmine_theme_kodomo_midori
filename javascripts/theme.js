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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setCloseRibbon)
}
