import { ProfileForm } from "../_components/profile-form";
import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is public profile data what other users can see if they visit
          your profile.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
