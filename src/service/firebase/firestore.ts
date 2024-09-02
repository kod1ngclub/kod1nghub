import { getFirestore } from "firebase/firestore"
import { firebase_app } from "./init"

export const firestore_DB = getFirestore(firebase_app)
