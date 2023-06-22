import { WP_URL } from "../../const";
import axios from "axios";
import type IRawPost from "../../types/IRawPost";
import type IPost from "../../types/IPost";
import decodeHtmlEntities from "../decodeHtmlEntities";
import parsePost from "../parsePost";

export default async function getPosts(queryString: string = "per_page=10"): Promise<IPost[] | null> {

    return axios.get(`${WP_URL}/wp-json/wp/v2/posts?${queryString}`)
        .then(res => res.data)
        .then(posts => posts.map((post: IRawPost) => parsePost(post)))
        .catch(err => {
            console.error(err);
            return null;
        });
}