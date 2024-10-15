import iconsBestsellers from '@/app/assets/images/nav/icons/bestsellers.jpg';
import iconsNew from '@/app/assets/images/nav/icons/new.jpg';
import iconsPicks from '@/app/assets/images/nav/icons/picks.jpg';
import uiKitsBlue from '@/app/assets/images/nav/ui-kits/blue.jpg';
import uiKitsMixed from '@/app/assets/images/nav/ui-kits/mixed.jpg';
import uiKitsPurple from '@/app/assets/images/nav/ui-kits/purple.jpg';

export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks",
        href: "#",
        imageSrc: uiKitsMixed,
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: uiKitsBlue,
      },
      {
        name: "Bestsellers",
        href: "#",
        imageSrc: uiKitsPurple,
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favourite Icon Picks",
        href: "#",
        imageSrc: iconsPicks,
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: iconsNew,
      },
      {
        name: "Bestselling Icons",
        href: "#",
        imageSrc: iconsBestsellers,
      },
    ],
  },
];
