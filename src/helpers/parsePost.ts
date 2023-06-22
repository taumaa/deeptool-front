import type IRawPost from "../types/IRawPost";
import type IPost from "../types/IPost";
import decodeHtmlEntities from "./decodeHtmlEntities";
import convertDate from "./convertDate";
import getCategoryFromId from "./getCategoryFromId";

export default function parsePost(rawPost: IRawPost) {
    const post: IPost = {
        title: decodeHtmlEntities(rawPost.title.rendered),
        excerpt: decodeHtmlEntities(rawPost.excerpt.rendered),
        humanReadableDate: convertDate(rawPost.date),
        content: rawPost.content.rendered,
        date: rawPost.date,
        slug: rawPost.slug,
        featuredImage: rawPost.featuredImage,
        category: getCategoryFromId(rawPost.categories[0]) ?? null
    }
    
    return post
}
    