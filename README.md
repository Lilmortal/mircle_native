This is a generic CRUD mobile app made using React Native.
It has been tested only on Android devices, I'm too poor to afford an iphone.

The main idea of this app is to allow users to add each other via QR Code or NFC. As of now, only the QR Code is supported.
There are a few features that are missing or buggy, but due to time constraints and my attention span on other projects, fixing these will be my secondary goal.

1. Clicking on the map on a friend's profile may result in the app crashing, it works fine on an android simulator though.
2. Clicking on the back button AFTER you registered an account on the login page brings you back to the email confirmation page. It should show a modal saying if you want to quit the app or not...
3. Clicking on a button twice will call that action twice, in the future I will fix it where clicking on a button will disable it.
4. Going to each page should display a spinning indicator, as of now, it only shows up on some of the page with intensive work (e.g. adding a user, searching for friends etc).
5. On the settings page, the sound volume does not affect the push notification sound volume at all.
6. The push notification displays some very basic default android image as a logo and a not so useful message.
7. Need to add a logo for this app.
8. Find a better way to redesign the profile page to allow users to edit individual fields.
9. You can actually drag the drawer navigation on the login or register page which is not allowed. A pull request has been raised on React Navigation, which is the library that I am using for navigation, to fix that issue. I am waiting for the
next release so I can fix it.
10. Adding a friend will show a push notification on their phone that you have added him/her, even if this app is not active on their phone.

Essentially the usefulness of this app is non-existant, this is my first attempt at React Native (I have worked on React.js on the web before though); it is to showcase basic scenarios like navigation, push notifications, cameras, maps and API
integration. The only feature that I still have not solved yet are web sockets, which are probably the solution I will go to in terms of showing a push notification on your friends phone when you added them, however an open web socket that listens for notifications like that for the entire duration of the app may result in the phones battery being depleted much more quicker than usual... I'm thinking if there is another way.

I have added some tests for API and redux, most of them don't work due to the fact that Form-Data is not defined on test cases, I will figure out how to fix later if I have time. I also have not implemented components test using Enzyme as of now, Enzyme does not work well with React Native (it can be tricky to set up for some reason, compared to React.js which is easy to setup). 

Facebook recommended React Navigation as the navigation library, but I have several problems with it, the most important part being it is not componentized (is that even a word). There are several features I want to implement but can't due to the weird objects that I have to implement for React Navigation like StackNavigator({}), DrawerNavigator({}) etc. If I were to start over again, I might user React-Router navigation which looks identical, if not the same as React.js navigation. React-Router v4 onwards does it well.
