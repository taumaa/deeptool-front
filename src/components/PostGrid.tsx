import type IPost from "../types/IPost";

import PostGridCard from "./PostGridCard";


const PostGrid = ({posts}: {posts: IPost[]}) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 my-8 gap-y-16">
            {posts.map((post) => (
                <PostGridCard post={post} />
            ))}
        </div>
    )
}

export default PostGrid