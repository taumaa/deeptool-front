import type IPost from "../types/IPost";
import convertDate from "../helpers/convertDate";

const PostGridCard = ({ post }: { post: IPost }) => {

    const date = convertDate(post.date)

    if (!post.category) {
        return null
    }

    return (
        <a href={`/${post.category.slug}/${post.slug}/`} className="flex flex-col space-y-4">
            <div>
                <img src={post.featuredImage.medium_large} alt={post.title} className="h-48 w-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col space-y-2">
                <div className="text-sm text-gray-400 font-mulish font-semibold">
                    {date}
                </div>
                <div className="font-bold font-mulish text-slate-900 text-lg">
                    <span>{post.title}</span>
                </div>
            </div>
        </a>
    )
}

export default PostGridCard