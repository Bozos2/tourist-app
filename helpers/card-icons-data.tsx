import {
  FaCar,
  FaWifi,
  FaBicycle,
  FaSwimmingPool,
  FaMapMarkedAlt,
  FaLeaf,
  FaMapSigns,
  FaHiking,
  FaRunning,
  FaSnowflake,
  FaSun,
  FaCamera,
} from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { FaHandsHoldingChild, FaShop } from "react-icons/fa6";
import { LiaCocktailSolid } from "react-icons/lia";
import { IoBoat } from "react-icons/io5";
import { MdSportsFootball, MdNightlightRound } from "react-icons/md";
import { RiAncientGateFill } from "react-icons/ri";
import { PiTentFill } from "react-icons/pi";

export interface SpecialFeatureProps {
  label: string;
  icon: JSX.Element;
}

const styles = "w-5 h-5 text-primary dark:text-white";

export const specialFeaturesData: Record<string, SpecialFeatureProps> = {
  parking: {
    label: "Parking",
    icon: <FaCar className={styles} />,
  },
  wifi: { label: "Wi-Fi", icon: <FaWifi className={styles} /> },
  outdoorseating: {
    label: "Outdoor seating",
    icon: <GiParkBench className={styles} />,
  },
  fitnessarea: {
    label: "Fitness area",
    icon: <IoIosFitness className={styles} />,
  },
  childcareservice: {
    label: "Childcare service",
    icon: <FaHandsHoldingChild className={styles} />,
  },
  bicyclerental: {
    label: "Bicycle rental",
    icon: <FaBicycle className={styles} />,
  },
  loungearea: {
    label: "Lounge Area",
    icon: <LiaCocktailSolid className={styles} />,
  },
  guidedtours: {
    label: "Guided Tours",
    icon: <FaMapMarkedAlt className={styles} />,
  },
  giftshops: { label: "Gift Shops", icon: <FaShop className={styles} /> },
  swimmingareas: {
    label: "Swimming Areas",
    icon: <FaSwimmingPool className={styles} />,
  },
  boating: { label: "Boating", icon: <IoBoat className={styles} /> },
};

export const idealForData = {
  naturelovers: { label: "Nature Lovers", icon: <FaLeaf className={styles} /> },
  adventure: { label: "Adventure", icon: <FaMapSigns className={styles} /> },
  hiking: { label: "Hiking", icon: <FaHiking className={styles} /> },
  sports: { label: "Sports", icon: <MdSportsFootball className={styles} /> },
  activity: { label: "Activity", icon: <FaRunning className={styles} /> },
  colddays: { label: "Cold Days", icon: <FaSnowflake className={styles} /> },
  warmdays: { label: "Warm Days", icon: <FaSun className={styles} /> },
  historicaltours: {
    label: "Historical Tours",
    icon: <RiAncientGateFill className={styles} />,
  },
  camping: { label: "Camping", icon: <PiTentFill className={styles} /> },
  photography: { label: "Photography", icon: <FaCamera className={styles} /> },
  nighttours: {
    label: "Night Tours",
    icon: <MdNightlightRound className={styles} />,
  },
};

export const IdealForIconsPreview = () => {
  return (
    <div>
      {Object.values(idealForData).map((item, index) => (
        <div key={index} className="flex flex-row gap-2">
          <p>{item.label}</p>
          {item.icon}
        </div>
      ))}
    </div>
  );
};
