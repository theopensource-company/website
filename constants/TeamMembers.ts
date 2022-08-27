import { StaticImageData } from 'next/image';

import PortraitMicha from '../assets/image/team/m-d-vries.jpg';
import PortraitMorgan from '../assets/image/team/m-hofmann.jpg';
import PortraitTies from '../assets/image/team/t-wellhuner.jpeg';

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
        name: "Morgan Hofmann",
        portrait: PortraitMorgan,
        role: "Developer, Product"
    },
    {
        name: "Ties Wellhüner",
        portrait: PortraitTies,
        role: "Product, Graphic Design"
    },
];