import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "YOUR GCM SENDER ID",
  requestPermissions: true
});

export default PushNotification;
