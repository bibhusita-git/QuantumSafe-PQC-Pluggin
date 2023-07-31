document.addEventListener("DOMContentLoaded", function () {
  var blockInput = document.getElementById("blockInput");
  var unblockInput = document.getElementById("unblockInput");

  blockInput.addEventListener("change", function () {
    var url = blockInput.value;
    if (url) {
      chrome.runtime.sendMessage({ message: "add_to_blocklist", url: url }, function (response) {
        if (response && response.success) {
          blockInput.value = "";
          alert("URL blocked. Please refresh your page.");
        } else {
          alert("Error occurred while adding URL to blocklist.");
        }
      });
    }
  });

  unblockInput.addEventListener("change", function () {
    var url = unblockInput.value;
    if (url) {
      chrome.runtime.sendMessage({ message: "remove_from_blocklist", url: url }, function (response) {
        if (response && response.success) {
          unblockInput.value = "";
          alert("URL unblocked. Please refresh your page.");
        } else {
          alert("Error occurred while removing URL from blocklist.");
        }
      });
    }
  });
});
