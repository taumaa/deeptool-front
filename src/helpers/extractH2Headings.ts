import cheerio from 'cheerio';
import { load } from 'cheerio';

type Heading = {
  id: string;
  text: string;
};

export default function extractH2Headings(html: string): Heading[] {
  const $ = load(html);
  const headings: Heading[] = [];

  $('h2').each((index, element) => {
    const id = $(element).attr('id');
    const text = $(element).text();
    if (id) {
      headings.push({ id, text });
    }
  });

  return headings;
}