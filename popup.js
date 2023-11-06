document.addEventListener('DOMContentLoaded', function () {
  const urlInput = document.getElementById('urlInput');
  const checkButton = document.getElementById('checkButton');
  const statusText = document.getElementById('statusText');

  checkButton.addEventListener('click', () => {
    const urlToCheck = urlInput.value;
    chrome.runtime.sendMessage({ message: 'checkTab', url: urlToCheck }, (response) => {
      if (response.found) {
        statusText.textContent = 'The website is open in an active tab!';
      } else {
        statusText.textContent = 'The website is not open in an active tab.';
      }
    });
  });
});
