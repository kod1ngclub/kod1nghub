import { Post } from "@/model/post"

import { collection, query, getDocs } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_POST_COLLECTION_NAME = "post"

export const GetAllPosts = async () => {
    const queried = query(collection(firestore_DB, FIREBASE_POST_COLLECTION_NAME))
    const snapshoted = await getDocs(queried)

    const posts = new Array<Post>()

    snapshoted.forEach(item => posts.push(item.data() as Post))

    return posts
}
