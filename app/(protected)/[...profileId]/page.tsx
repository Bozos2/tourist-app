import { currentUser } from "@/lib/auth";
import { getUserData } from "@/actions/user-data";
import { getUserLocations, getPublicLocations } from "@/actions/location";
import { getFavorites, getPublicFavorites } from "@/actions/favorites";

import ProfileBanner from "../_components/profile-banner";
import ProfileNavbar from "../_components/profile-navbar";

import { UserDataProps } from "../_components/profile-about-tab";
import { LocationsDataProps } from "../_components/profile-locations-tab";
import { FavoritesDataProps } from "../_components/profile-favorites-tab";
import { getUserComments } from "@/actions/reviews";
import { ReviewsDataProps } from "../_components/profile-reviews-tab";
import { SocialLink } from "../_components/profile-banner";

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

  const reviews = await getUserComments(profileId);

  let data;
  let locations: LocationsDataProps[] = [];
  let favorites: FavoritesDataProps[] = [];

  if (!isOwnUser) {
    data = await getUserData(profileId);
    locations = await getPublicLocations(profileId);
    favorites = await getPublicFavorites(profileId);
  }

  if (isOwnUser) {
    const locations = await getUserLocations(profileId);
    const favorites = await getFavorites();

    return (
      <section className="my-12 flex min-h-screen justify-center  font-poppins">
        <div className="w-full max-w-[1135px] px-6 2xl:px-0">
          <div>
            <ProfileBanner
              image={user.image as string}
              coverImage={user.coverImage as string}
              username={user.name as string}
              bio={user.bio as string}
              verified={user.emailVerified as Date}
              socials={user.urls}
              isOwnUser={isOwnUser}
            />
            <div className="flex w-full flex-row">
              <div className="flex-none lg:w-72"></div>
              <div className="w-full xl:ml-6 2xl:ml-8">
                <ProfileNavbar
                  isOwnUser={isOwnUser}
                  user={user}
                  locations={locations}
                  favorites={favorites as FavoritesDataProps[]}
                  reviews={reviews as ReviewsDataProps[]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-12 flex min-h-screen justify-center  font-poppins">
      <div className="w-full max-w-[1135px] px-6 2xl:px-0">
        <div>
          <ProfileBanner
            image={data?.image as string}
            username={data?.name as string}
            coverImage={data?.coverImage as string}
            bio={data?.bio as string}
            verified={data?.emailVerified as Date}
            socials={data?.urls as SocialLink[]}
            isOwnUser={isOwnUser}
          />
          <div className="flex w-full flex-row">
            <div className="flex-none lg:w-72"></div>
            <div className="w-full xl:ml-6 2xl:ml-8">
              <ProfileNavbar
                isOwnUser={isOwnUser}
                user={data as UserDataProps}
                locations={locations}
                favorites={favorites}
                reviews={reviews as ReviewsDataProps[]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
