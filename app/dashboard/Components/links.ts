import backlightissue from "@/public/images/backlight.jpg";
import noDisplay from "@/public/images/no display.jpg";
import soundProblem from "@/public/images/soundproblem1.webp";
import rotation from "@/public/images/rotation1.webp";
import otherProblem from "@/public/images/otherproblem.jpg";
import simpleMount from "@/public/images/wall-mounted-tv.webp";
import ceilingMount from "@/public/images/ceiling-tv-mount.jpg";
import otherTypeInstalltion from "@/public/images/othertimeofInstalltion.jpg";

interface LedRepair {
  id: number;
  image: any; // Assuming 'image' is the path to the image
  title: string;
  range: string;
  referProp: string;
}

export const ledRepair: LedRepair[] = [
  {
    id: 1,
    image: backlightissue,
    title: "Backlight Problem",
    range: "₹1.5K - ₹8K",
    referProp: "backlight",
  },
  {
    id: 2,
    image: noDisplay,
    title: "No display Problem",
    range: "₹1.5K - ₹7.5K",
    referProp: "no dispaly",
  },
  {
    id: 3,
    image: soundProblem,
    title: "Sound Issue",
    range: "₹1.5K - ₹6K",
    referProp: "sound problem",
  },

  {
    id: 4,
    image: otherProblem,
    title: "Other Problem",
    range: "Book Now",
    referProp: "other repairing",
  },
];

interface LedIntalltion {
  id: number;
  image: any; // Assuming 'image' is the path to the image
  title: string;
  range: string;
  referProp: string;
}

export const ledInstalltion: LedIntalltion[] = [
  {
    id: 1,
    image: rotation,
    title: "Rotating Wall Mount",
    range: "₹1.5K - ₹8K",
    referProp: "rotating",
  },
  {
    id: 2,
    image: simpleMount,
    title: "Flat Wall Mount",
    range: "₹700 - ₹4.5K",
    referProp: "simple Mount",
  },
  {
    id: 3,
    image: ceilingMount,
    title: "Ceiling Mount",
    range: "₹3K - ₹10.5K",
    referProp: "Celing mount",
  },
  {
    id: 4,
    image: otherTypeInstalltion,
    title: "Other Installations",
    range: "Book Now",
    referProp: "other installation",
  },
];
