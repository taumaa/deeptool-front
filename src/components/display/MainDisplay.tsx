import type IPost from "../../types/IPost";
import CategoryTag from "../CategoryTag";


const MainDisplay = ({posts}: {posts: IPost[]}) => {

    if (posts.length > 3 || posts.length === 0) {
        return (
            <div>
                    
            </div>
        )
    }

    const mainPost = posts[0]
    const secondPost = posts[1]
    const thirdPost = posts[2]

    return (
        <div className="grid grid-cols-10 lg:h-128 gap-8">
            <div className="lg:col-span-4 col-span-10">
                {mainPost.category && (
                    <a href={`/${mainPost.category.slug}/${mainPost.slug}`} className="relative w-full lg:h-full h-64 flex items-end justify-end">
                        <img src={mainPost.featuredImage.medium_large} alt="Image" className="absolute w-full lg:h-full h-64 object-cover rounded-xl" />
                        <div className="bg-black absolute h-full w-full z-10 opacity-50 rounded-xl"></div>
                        <div className="absolute lg:text-2xl text-xl text-gray-100 font-bold font-outfit justify-end w-full h-full items-end p-4 z-20 flex">
                            {mainPost.title}
                        </div>
                    </a>
                )}
            </div>
            <div className="lg:col-span-6 col-span-10 flex flex-col space-y-8">
                {secondPost.category && (
                    <a href={`/${secondPost.category.slug}/${secondPost.slug}`} className="relative w-full lg:h-full h-64 flex items-end justify-end">
                        <img src={secondPost.featuredImage.medium_large} alt="Image" className="absolute w-full h-full object-cover rounded-xl" />
                        <div className="bg-black absolute h-full w-full z-10 opacity-50 rounded-xl"></div>
                        <div className="absolute lg:text-2xl text-xl text-gray-100 font-bold font-outfit justify-end w-full h-full items-end p-4 z-20 flex">
                            {secondPost.title}
                        </div>
                    </a>
                )}
                {thirdPost.category && (
                    <a href={`/${thirdPost.category.slug}/${thirdPost.slug}`} className="relative w-full lg:h-full h-64 flex items-end justify-end">
                        <img src={thirdPost.featuredImage.medium_large} alt="Image" className="absolute w-full h-full object-cover rounded-xl" />
                        <div className="bg-black absolute h-full w-full z-10 opacity-50 rounded-xl"></div>
                        <div className="absolute lg:text-2xl text-xl text-gray-100 font-bold font-outfit justify-end w-full h-full items-end p-4 z-20 flex">
                            {thirdPost.title}
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default MainDisplay