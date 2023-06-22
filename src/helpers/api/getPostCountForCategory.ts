import { WP_URL } from "../../const";
import axios from "axios";

const getPostCountForCategory = async (categoryId: number): Promise<number> => {

    return axios.get(`${WP_URL}/wp-json/wp/v2/posts_count_by_category/${categoryId.toString()}/`)
        .then(res => res.data)
        .catch(err => {
            return 0;
        });
}

export default getPostCountForCategory;