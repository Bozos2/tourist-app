import { currentUser } from "@/lib/auth";

import Profile from "../_components/profile";

interface ProfileProps {
  params: {
    profileId: string;
  };
}

const ProfilePage: React.FC<ProfileProps> = async ({ params }) => {
  const user = await currentUser();
  const profileId = params.profileId[1].split("-").pop();

  if (!profileId) {
    return;
  }

  const isOwnUser = user?.id === profileId;

  return (
    <section className="my-12 flex min-h-screen justify-center  font-poppins">
      <div className="w-full max-w-[1135px] px-6">
        <Profile />
      </div>
    </section>
  );
};

export default ProfilePage;
