import { StaticImageData } from 'next/image';

import PortraitMicha from '../assets/image/team/m-d-vries.jpg';
import PortraitHazel from '../assets/image/team/h-hofmann.jpg';
import PortraitTies from '../assets/image/team/t-wellhuner.jpg';
import PortraitHessel from '../assets/image/team/h-v-bakel.jpg';

export const TeamMembers: Array<{
    name: string;
    portrait: StaticImageData;
    role: string;
}> = [
    {
        name: "Micha de Vries",
        portrait: PortraitMicha,
        role: "CEO, Developer"
    },
    {
        name: "Hazel Hofmann",
        portrait: PortraitHazel,
        role: "Developer, Product"
    },
    {
        name: "Ties Wellhüner",
        portrait: PortraitTies,
        role: "Product, Graphic Design"
    },
    {
        name: "Hessel van Bakel",
        portrait: PortraitHessel,
        role: "Product, Graphic Design"
    },

];