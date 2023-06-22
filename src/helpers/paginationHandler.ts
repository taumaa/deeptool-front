import getPostCountForCategory from "./api/getPostCountForCategory";
import getPostsForCategory from "./api/getPostsForCategory";
import { CATEGORIES_LIST_AS_SLUG, POSTS_PER_PAGE } from "../const";


const paginationHandler = async (categorySlug: string, page: number) => {

    const postCount = await getPostCountForCategory(parseInt(CATEGORIES_LIST_AS_SLUG[categorySlug].id));
    // Check if the provided page is valid, considering the number of posts per page and total post count, if not, page become 1
    if (page < 1 || page > Math.ceil(postCount / POSTS_PER_PAGE)) {
        page = 1;
    }

    const posts = await getPostsForCategory(parseInt(CATEGORIES_LIST_AS_SLUG[categorySlug].id), POSTS_PER_PAGE, page);
    
    const maxPage = Math.ceil(postCount / POSTS_PER_PAGE);

    const hasNextPage = page < maxPage;
    const hasPreviousPage = page > 1;

    return {
        posts,
        postCount,
        hasNextPage,
        hasPreviousPage,
        maxPage
    }
}

export default paginationHandler;