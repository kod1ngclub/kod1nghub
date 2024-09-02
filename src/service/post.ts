import { Post } from "@/model/post"

import { collection, query, getDocs, orderBy } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_POST_COLLECTION_NAME = "post"

export const GetAllPostsOrderedByUploaded = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_POST_COLLECTION_NAME), orderBy("uploaded", "desc"))
    const snapshoted = await getDocs(queried)

    const posts = new Array<Post>()

    snapshoted.forEach(item => posts.push(item.data() as Post))

    return posts
}
