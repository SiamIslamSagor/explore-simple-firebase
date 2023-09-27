/**
 * ///////////////////////////////////////////////////////////////
 *                            FIREBASE:
 * ///////////////////////////////////////////////////////////////
 *
 *
 *           ---------------------------------------
 *                      INITIAL INSTALLATION
 *           ---------------------------------------
 *
 * 1. visit: console.firebase.google.com
 * 2. create a project (skip google analytics)
 * 3. Register app  (create config)
 * 4. install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 *
 *          ---------------------------------------
 *                          INTEGRATION
 *           ---------------------------------------
 *
 * 7. Visit: Go to docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.jjs file: export default app
 * 9. Login.jsx: import  getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *           ---------------------------------------
 *                          PROVIDER SETUP
 *           ---------------------------------------
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in  method (google, facebook, github, etc. ): first open the project > Build > Authentication > Sign-in method > set up as your wish.
 * 14. specific for [vite]: change 127.0.0.1 to localhost
 *
 *
 *
 *            ===========================================
 *                         MORE AUTH PROVIDER
 *           ===========================================
 *
 * 1. activate the auth provider (create app, provide redirect url, client id , secret code)
 * 2.
 *
 *
 *
 */
