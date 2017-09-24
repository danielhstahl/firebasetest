//@flow

/**None of this is private information.  
 * The apiKey is not used for authorization
 * or authentication.  It is used to identify
 * the database (like a web url).  See
 * https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
 * */
export const config = {
    apiKey: "AIzaSyDRPQjsMUba7HNWA5TnvIJD6ViY3LZZeJU",
    authDomain: "testproject-affd6.firebaseapp.com",
    databaseURL: "https://testproject-affd6.firebaseio.com",
    projectId: "testproject-affd6",
    storageBucket: "testproject-affd6.appspot.com",
    messagingSenderId: "758762119687"
}
