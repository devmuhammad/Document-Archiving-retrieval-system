export const showStatus = () => {
  let notification = document.createElement("div")
  notification.setAttribute("class", "notification")
  notification.innerHTML = "Your computer seems to be offline!"

  let app = document.body
  app.insertBefore(notification, app.childNodes[0])
  console.log(notification)
}