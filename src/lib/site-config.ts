// Liens et médias à compléter.
/** Lien Calendly pour « Réserver un appel ». Vide = le bouton mène au formulaire de contact. */
export const CALENDLY_URL = "";

/**
 * Showreel du hero (muet, en boucle). Laisser à null tant que le fichier n'est pas fourni :
 * la photo actuelle reste affichée. Ex. : { webm: showreelWebm.url, mp4: showreelMp4.url }
 */
export const SHOWREEL: { webm: string | null; mp4: string | null } = { webm: null, mp4: null };

export const WHATSAPP_URL = "https://wa.me/41789670537";
export const CONTACT_EMAIL = "info@triadepublicite.ch";

/** Impressum — à compléter. Les champs vides ne sont pas affichés. */
export const LEGAL = {
  /** Forme juridique, ex. « Entreprise individuelle » ou « Sàrl » */
  legalForm: "",
  /** Adresse postale. Vide = « Genève, sur rendez-vous » */
  address: "",
  /** Numéro IDE/UID, ex. « CHE-123.456.789 » */
  uid: "",
  owner: "Augusto Sousa",
};
