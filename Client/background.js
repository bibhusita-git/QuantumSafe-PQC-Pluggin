const blocklist = [];

function updateBlocklistOnServer(blocklist) {
  fetch('https://localhost/updateBlocklist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blocklist)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Blocklist updated on server:', data);
    })
    .catch((error) => {
      console.error('Error updating blocklist on server:', error);
    });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'add_to_blocklist') {
    addToBlocklist(request.url);
    updateBlocklistOnServer(blocklist); // Update blocklist on the server
    sendResponse({ success: true });
  } else if (request.message === 'remove_from_blocklist') {
    removeFromBlocklist(request.url);
    updateBlocklistOnServer(blocklist); // Update blocklist on the server
    sendResponse({ success: true });
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (shouldBlockRequest(details.url)) {
      console.log('Blocked request:', details.url);
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ['<all_urls>'] },
  ['blocking']
);

function addToBlocklist(url) {
  if (!blocklist.includes(url)) {
    blocklist.push(url);
  }
}

function removeFromBlocklist(url) {
  var index = blocklist.indexOf(url);
  if (index !== -1) {
    blocklist.splice(index, 1);
  }
}

function shouldBlockRequest(url) {
  for (var i = 0; i < blocklist.length; i++) {
    const regex = new RegExp(blocklist[i], 'i'); // Case-insensitive match
    if (regex.test(url)) {
      return true;
    }
  }
  return false;
}
