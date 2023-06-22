import { WP_URL } from "../../const";
import axios from "axios";
import parsePost from "../parsePost";
import type IPost from "../../types/IPost";


export default async function getPost(slug: string, categoryId: string): Promise<IPost | null> {

    return axios.get(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&categories=${categoryId}`)
        .then(res => res.data[0])
        .then(post => parsePost(post))
        .catch(err => {
            console.log(err);
            return null;
        });
}