export const WP_URL = "https://deeptool-wordpress.caprover.totocorp.fr"

export const CATEGORIES_LIST: { [key: string]: { name: string, slug: string, intro: string } }  = {
    "2": {
        "name": "Actualité",
        "slug": "actualite",
        "intro": "Découvez ici les dernières actualités du monde de l'IA",
    },
    "6": {
        "name": "Comparatif",
        "slug": "comparatif",
        "intro": "Nous comparons pour vous des dizaines de produits et services à base d'IA",
    },
    "3": {
        "name": "Tests",
        "slug": "test",
        "intro": "Découvrez nos tests de produits et services basés sur l'IA",
    },
    "4": {
        "name": "Tuto",
        "slug": "tuto",
        "intro": "Nous vous guidons pas à pas pour découvrir le monde de l'intelligence artificielle",
    }
    ,
    "5": {
        "name": "Formation",
        "slug": "formation",
        "intro": "Comprenez l'IA et apprenez à l'utiliser dans votre quotidien",
    }
}

export const CATEGORIES_LIST_AS_SLUG: { [key: string]: { name: string, id: string, intro: string } }  = {
    "actualite": {
        "name": "Actualité",
        "id": "2",
        "intro": "Découvez ici les dernières actualités du monde de l'IA",
    },
    "comparatif": {
        "name": "Comparatif",
        "id": "6",
        "intro": "Nous comparons pour vous des dizaines de produits et services à base d'IA",
    },
    "test": {
        "name": "Tests",
        "id": "3",
        "intro": "Découvrez nos tests de produits et services basés sur l'IA",
    },
    "tuto": {
        "name": "Tuto",
        "id": "4",
        "intro": "Nous vous guidons pas à pas pour découvrir le monde de l'intelligence artificielle",
    },
    "formation": {
        "name": "Formation",
        "id": "5",
        "intro": "Comprenez l'IA et apprenez à l'utiliser dans votre quotidien",
    }
}

export const POSTS_PER_PAGE = 60;

export const AUTHOR_DESCRIPTION = "Passionné de technologie depuis toujours, je suis persuadé que l'IA est sur le point de transformer notre monde. Je partage avec vous mes connaissances et ma passion, afin que vous soyez prêts à accueillir cette révolution imminente."