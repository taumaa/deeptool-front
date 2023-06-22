import { CATEGORIES_LIST_AS_SLUG } from "../const"

export default function getCategoryIdFromSlug(slug: string) {

    // Check if slug is in CATEGORIES_LIST_AS_SLUG
    if (!CATEGORIES_LIST_AS_SLUG[slug]) {
        return null
    }
    
    return CATEGORIES_LIST_AS_SLUG[slug].id
}