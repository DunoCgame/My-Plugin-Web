(function () {
  'use strict';
   var alarmName = 'remindme';
   function checkAlarm(callback) {
     chrome.alarms.getAll(function(alarms) {
       var hasAlarm = alarms.some(function(a) {
         return a.name == alarmName;
       });
       var newLabel;
       if (hasAlarm) {
         newLabel = 'Cancel alarm';
       } else {
         newLabel = 'Activate alarm';
       }
       document.getElementById('toggleAlarm').innerText = newLabel;
       if (callback) callback(hasAlarm);
     })
   }
   function createAlarm() {
     chrome.alarms.create(alarmName, {
       delayInMinutes: 0.1, periodInMinutes: 0.1});
   }
   function cancelAlarm() {
     chrome.alarms.clear(alarmName);
   }
   function doToggleAlarm() {
     checkAlarm( function(hasAlarm) {
       if (hasAlarm) {
         cancelAlarm();
       } else {
         createAlarm();
       }
       checkAlarm();
     });
   }
  document.getElementById('toggleAlarm').addEventListener('click', doToggleAlarm);
  checkAlarm();
})();


// var opt = {
    // type: 'list',
    // title: 'keep burning',
    // message: 'Primary message to display',
    // priority: 1,
    // items: [{ title: '', message: ''}],
    // iconUrl:'../images/icon.png'

// };

// function Notify(){
// chrome.notifications.create('notify1', opt, function(id) { console.log("Last error:", chrome.runtime.lastError); });
	
// }


// const button = document.createElement('button');

// button.textContent = 'Greet me!'

// document.body.insertAdjacentElement('afterbegin', button);

document.getElementById("NOTIFY").addEventListener('click', () => {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Just wanted to notify you',
      message: 'How great it is!',
      iconUrl: 'icon.png',
      type: 'basic'
    }
  });
});