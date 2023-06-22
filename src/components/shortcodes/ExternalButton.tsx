const ExternalButton = ({ href, text }: {href: string, text: string}) => {
    return (
        <div className="w-full flex justify-center items-center mt-8">
            <a href={href} rel="nofollow noopenner" target="_blank" className="px-5 py-3 font-medium font-outfit text-white bg-black text-sm rounded-xl flex flex-row space-x-2 items-center">
                <span>{text}</span>
                <img src="/external.png" className="h-4 w-4 " />
            </a>
        </div>
    )
}

export default ExternalButton