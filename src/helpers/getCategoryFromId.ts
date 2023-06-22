import { CATEGORIES_LIST } from "../const";

const getCategoryFromId = (categoryId: number) => {

    if (!categoryId) {
        return null;
    }

    return CATEGORIES_LIST[categoryId];
}

export default getCategoryFromId;