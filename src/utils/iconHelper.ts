import { faFacebook, faInstagram, faTiktok, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const iconsMapping: Record<string, IconDefinition> = {
    'fa-brands fa-facebook': faFacebook,
    'fa-brands fa-instagram': faInstagram,
    'fa-brands fa-tiktok': faTiktok,
    'fa-brands fa-spotify': faSpotify,
    'fa-brands fa-youtube': faYoutube,
}

export const getIcon = (iconName: string): IconDefinition | null => {
    return iconsMapping[iconName] || faSpotify;
}