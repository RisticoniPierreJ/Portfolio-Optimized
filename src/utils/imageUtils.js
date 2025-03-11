// Fonctions pour importer les Url des images du dossier spécifié
function getImageUrl(folder, name) {
    return new URL(`../assets/images/${folder}/${name}`, import.meta.url).href;
}

export { getImageUrl };