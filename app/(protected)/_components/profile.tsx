import ProfileBanner from "./profile-banner";
import ProfileNavbar from "./profile-navbar";

const Profile = () => {
  return (
    <div>
      <ProfileBanner
        image={""}
        username="Joe"
        bio="Surfer, dog lover and passionate chess player"
        verified={new Date("2024-05-16T17:09:38.907Z")}
      />
      <div className="flex flex-row">
        <div className="flex-none lg:w-80"></div>
        <div className="flex-grow">
          <ProfileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
