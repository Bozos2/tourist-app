import { getLocation } from "@/actions/get-detail-location";

interface LoocationDetailProps {
  params: {
    loctionId: string;
  };
}

const LocationPage: React.FC<LoocationDetailProps> = async ({ params }) => {
  const location = await getLocation(params.loctionId);

  console.log(location);

  return <div>{location?.name}</div>;
};

export default LocationPage;
