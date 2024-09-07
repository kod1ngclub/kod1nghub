import { Service } from "@/model/service"

import { collection, query, getDocs, where } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_SERVICE_COLLECTION_NAME = "service"

export const GetAllServices = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_SERVICE_COLLECTION_NAME))
    const snapshoted = await getDocs(queried)

    const services = new Array<Service>()

    snapshoted.forEach(item => services.push(item.data() as Service))

    return services
}

export const GetAllMajorServcies = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_SERVICE_COLLECTION_NAME), where("major", "==", true))
    const snapshoted = await getDocs(queried)

    const services = new Array<Service>()

    snapshoted.forEach(item => services.push(item.data() as Service))

    return services
}

export const GetAllMinorServcies = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_SERVICE_COLLECTION_NAME), where("major", "==", false))
    const snapshoted = await getDocs(queried)

    const services = new Array<Service>()

    snapshoted.forEach(item => services.push(item.data() as Service))

    return services
}
