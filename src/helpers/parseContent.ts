import * as cheerio from 'cheerio';
import slugify from './slugify';

export default function parseContent(html: string): string {
    const $ = cheerio.load(html);

    $('h2, h3').each(function() {
        const element = $(this);
        const text = element.text();
        const slugifiedText = slugify(text);

        element.attr('id', slugifiedText);
    });

    return $.html();
}

