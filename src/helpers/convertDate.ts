export default function convertDate(dateString: string): string {
    const moisFrancais = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const date = new Date(dateString);
    const jour = date.getDate();
    const mois = date.getMonth();
    const annee = date.getFullYear();

    return `${jour} ${moisFrancais[mois]} ${annee}`;
}