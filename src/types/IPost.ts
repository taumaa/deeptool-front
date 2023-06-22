export default interface IPost {
    title: string;
    excerpt: string;
    content: string;
    humanReadableDate: string;
    date: string;
    slug: string;
    featuredImage: {
        full: string;
        thumbnail: string;
        medium: string;
        medium_large: string;
        large: string;
      }
    category: {
        name: string;
        slug: string;
        intro: string;
    } | null;
}