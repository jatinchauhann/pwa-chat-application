# Nucleon Chat Application
**Nucleon Chat** is a PWA *(progressive web app)* which can work across any platform like ios, Android, Linux , Windows , Windows Phone. It has all the basic functionalities of a native mobile application.

## Features
* Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.
* Responsive - Fit any form factor: desktop, mobile, tablet, or forms yet to emerge.
* Connectivity independent - Service workers allow work offline, or on low quality networks.
* App-like - Feel like an app to the user with app-style interactions and navigation.
* Fresh - Always up-to-date thanks to the service worker update process.
* Secure - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
* Re-engageable - Make re-engagement easy through features like push notifications.
* Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
* Linkable - Easily shared via a URL and do not require complex installation
* Space Optimization -  With PWA we can achieve memory optimization in terms of and working RAM. As per analysis it not exceeding more than 10KB.
* Responsive - The chat application is responsive and is platform independent. The stats are checked using lighthouse.

## Setting up your Firebase
* To Access the backend you have to login to firebase and get your domain https status as PWA works only on https.
* You have to host it from firebase and apply Google authentication on it.
* You will get a client id and access token from there and add it your application.

1. Create a Firebase Account
2. Using Console, create and Application
3. Get a free domain using FreeNom.com and add the DNS to the Firebase Console Hosting Tab
4. Now using CLI - (Change to the root dir)
5. Enter following commads in the command line
* npm install -g firebase
* firebase init  
* firebase use --add
* firebase serve (To check application in the LocalHost)
* firebase deploy (To host in the domain)

## Future Scope
* This application is best suited for the start-ups as it can be embedded in any application easily as it is using only HTML , CSS and JS and all the tags defined are self-explaintary and can be modified according to the requirements of organisation.
*The hashcode of a particular image will help in clearing the reductant data as only one copy of a particular image is downloaded.
 
## [DEMO NUCLEON CHAT](www.nucleon.cf "Nucleon Chat")
 
 
