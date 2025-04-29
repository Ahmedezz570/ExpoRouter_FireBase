## 🔐 Authentication

For Register, I used the `createUserWithEmailAndPassword(auth, email, password)` method from Firebase.
 
- `auth`: This is your default authentication object imported from your `firebase.jsx` file.
- `email` and `password`: These are values managed through `useState`.

For Login, I used the `signInWithEmailAndPassword(auth, email, password)` method from Firebase.
 
- `auth`: This is your default authentication object imported from your `firebase.jsx` file.
- `email` and `password`: These are values managed through `useState`.

## FireStore

For add , I used `addDoc(collection(db , "newProducts")` 
  `db:` This is the Firestore database object connected to your Firebase project.

  `newProducts`: This is the name of the collection in which I store my products.

  `addDoc`: This method adds a new document (product) into the specified collection.

  `productData:` The object that contains the product's details (like name, price, description, etc.).

