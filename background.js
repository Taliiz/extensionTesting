console.log("is this working?")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
  console.log("button was clicked")
}
