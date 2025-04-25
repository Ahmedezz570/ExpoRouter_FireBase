## 🔐 Authentication

For Register, I used the `createUserWithEmailAndPassword(auth, email, password)` method from Firebase.
 
- `auth`: This is your default authentication object imported from your `firebase.jsx` file.
- `email` and `password`: These are values managed through `useState`.

For Login, I used the `signInWithEmailAndPassword(auth, email, password)` method from Firebase.
 
- `auth`: This is your default authentication object imported from your `firebase.jsx` file.
- `email` and `password`: These are values managed through `useState`.