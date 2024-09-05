import { Contact, ContactName } from "@/model/contact"

import { collection, query, getDocs, where } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_CONTACT_COLLECTION_NAME = "contact"

export const GetAllContacts = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_CONTACT_COLLECTION_NAME))
    const snapshoted = await getDocs(queried)

    const contacts = new Array<Contact>()

    snapshoted.forEach(item => contacts.push(item.data() as Contact))

    return contacts
}

export const GetContactByName = async (name: ContactName) => {
    const queried = query(collection(firestore_DB, FIREBASE_CONTACT_COLLECTION_NAME), where("name", "==", name))
    const snapshoted = await getDocs(queried)

    const contacts = new Array<Contact>()

    snapshoted.forEach(item => contacts.push(item.data() as Contact))

    return contacts[0] // return only first
}

export const GetContactsByName = async (name: ContactName) => {
    const queried = query(collection(firestore_DB, FIREBASE_CONTACT_COLLECTION_NAME), where("name", "==", name))
    const snapshoted = await getDocs(queried)

    const contacts = new Array<Contact>()

    snapshoted.forEach(item => contacts.push(item.data() as Contact))

    return contacts
}