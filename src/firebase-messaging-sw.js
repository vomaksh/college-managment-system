import firebase from './config/fire';
import Push from 'push.js';

export const askForPermissioToReceiveNotifications = () => {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    console.log("Have Permission");
    return messaging.getToken();
  }).then(token => {
    console.log(token);
  }).catch(error => {
    if (error.code === "messaging/permission-blocked") {
      console.log("Please Unblock Notification Request Manually");
   } else {
      console.log("Error Occurred", error);
   }
  });
  messaging.onMessage(payload => {
    console.log("Notification Received", payload);
    Push.create(payload.notification.title, {
      body: payload.notification.body
    })
 });
}