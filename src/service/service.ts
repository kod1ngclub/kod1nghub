import { Service } from "@/model/service"

import { collection, query, getDocs } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_SERVICE_COLLECTION_NAME = "service"

export const GetAllServices = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_SERVICE_COLLECTION_NAME))
    const snapshoted = await getDocs(queried)

    const contacts = new Array<Service>()

    snapshoted.forEach(item => contacts.push(item.data() as Service))

    return contacts
}
