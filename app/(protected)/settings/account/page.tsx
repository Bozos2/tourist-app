import { Separator } from "@/components/ui/separator";
import AccountForm from "../../_components/account-form";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your profile image and enable Two
          Factor Authentication to be safe.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
