let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
  
});

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});