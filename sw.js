chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.active &&
    tab.url?.startsWith("https://yodobashi.com/")
  ) {
    console.log("Accessed to yodobashi.com");
    chrome.tabs.update(tabId, { url: "https://www.yodobashi.com/" });
  }
});
