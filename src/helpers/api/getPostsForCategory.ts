import getPosts from "./getPosts";


const getPostsForCategory = async (categoryID: number, perPage: number, page: number) => {
    return getPosts(`categories=${categoryID.toString()}&per_page=${perPage.toString()}&page=${page.toString()}&order=desc&orderby=date`);
}

export default getPostsForCategory;