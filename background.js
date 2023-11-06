// Listen for the chrome.tabs.onUpdated event.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, currentTab) {
  if (changeInfo.url) {
    //   Check if the URL is already live in another tab.
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (
          tabs[i].url === currentTab.url &&
          tabs[i].id != currentTab.id &&
          ['chrome://newtab/', ''].includes(currentTab.url) === false
        ) {
          chrome.notifications.create('', {
            title: 'The URL you entered is already live in another tab',
            message: '',
            iconUrl: '/icon.png',
            type: 'basic',
          });
          break;
        }
      }
    });
  }
});
