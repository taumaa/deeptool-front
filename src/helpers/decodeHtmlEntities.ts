import he from 'he';

export default function decodeHtmlEntities(text: string): string {
    const decoded = he.decode(text);
    return decoded.replace(/<p>|<\/p>|\[…\]/g, match => {
        if (match === '<p>' || match === '</p>') return '';
        if (match === '[…]') return '...';
        return ''; // Add this line
    });
}