import Link from "next/link";

import {
  renderIfOwnUser,
  renderIfValueExist,
} from "@/helpers/user-value-checker";
import { format } from "date-fns";

import { MdEdit } from "react-icons/md";
import { getSocialIcon, getSocialIconAndLabel } from "@/helpers/user-socials";
import { SocialLink } from "./profile-banner";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export interface UserDataProps {
  name?: string | null;
  role: string;
  gender?: string | null;
  bio?: string | null;
  dob?: Date | null;
  country?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  id?: string | undefined;
  image?: string | null;
  isOauth?: boolean;
  isTwoFactorEnabled?: boolean;
  urls?: SocialLink[];
}

export interface UserData {
  user: UserDataProps;
  isOwnUser: boolean;
}

export const ProfileAboutTab = ({ user, isOwnUser }: UserData) => {
  const visibleUrls = user.urls?.slice(0, 3);

  return (
    <div className="flex w-full  flex-col-reverse flex-wrap gap-4 sm:max-h-[800px] lg:flex-row">
      <div className="h-fit flex-shrink-0 flex-grow-0 rounded-xl border border-input p-4 scrollScreen:p-6">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Personal Information
          </h1>
          {isOwnUser ? (
            <Link href="/settings">
              <MdEdit className="h-4 w-4 text-gray-900 dark:text-white" />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="space-y-3 pt-6">
          {renderIfValueExist(
            user.name,
            <LabelandValue label="Name" value={user.name} />,
          )}
          {renderIfOwnUser(
            isOwnUser,
            user.email,
            <LabelandValue label="Email" value={user.email} />,
          )}
          <LabelandValue label="Role" value={user.role} />
          {renderIfValueExist(
            user.gender,
            <LabelandValue label="Gender" value={user.gender} />,
          )}
          {renderIfValueExist(
            user.dob,
            <LabelandValue
              label="Date of Birth"
              value={format(new Date(user.dob!), "PP")}
            />,
          )}
          {renderIfValueExist(
            user.country,
            <LabelandValue label="Country" value={user.country} />,
          )}
          {isOwnUser ? (
            <>
              {user.isTwoFactorEnabled ? (
                <div className="flex flex-row items-center gap-3 scrollScreen:gap-12">
                  <h1 className="w-[88px] text-sm text-muted-foreground scrollScreen:w-28 scrollScreen:text-base">
                    2FA
                  </h1>
                  <span className="rounded-xl border border-green-600 px-1.5 py-0.5 text-sm text-green-600">
                    Enabled
                  </span>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-3 scrollScreen:gap-12">
                  <h1 className="w-[88px] text-sm text-muted-foreground scrollScreen:w-28 scrollScreen:text-base">
                    2FA
                  </h1>
                  <span className="rounded-xl border border-destructive px-1.5 py-0.5 text-sm text-destructive">
                    Disabled
                  </span>
                </div>
              )}
            </>
          ) : (
            ""
          )}
          <div className="lg:hidden">
            {renderIfValueExist(
              user.emailVerified,
              <LabelandValue
                label="Joined"
                value={format(new Date(user.emailVerified!), "PP")}
              />,
            )}
          </div>
          <div className="lg:hidden">
            {user.urls ? (
              <div className="flex flex-row gap-3 scrollScreen:gap-12">
                <h1 className="w-[88px] text-sm text-muted-foreground scrollScreen:w-28 scrollScreen:text-base">
                  Socials
                </h1>
                <div className="flex max-w-[150px] flex-row items-center gap-2 scrollScreen:max-w-full">
                  {visibleUrls?.map(({ value }, index) => {
                    const Icon = getSocialIcon(value);
                    return (
                      Icon && (
                        <Link href={value} key={index}>
                          <Icon className="h-6 w-6 text-primary hover:opacity-80 dark:text-white" />
                        </Link>
                      )
                    );
                  })}
                  {user.urls?.length > 3 ? (
                    <SocialsDrawer urls={user.urls} />
                  ) : null}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="h-fit flex-grow rounded-xl border  border-input p-6 lg:max-w-[268px] xl:max-w-[350px]">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Biography
          </h1>
          {isOwnUser ? (
            <Link href="/settings">
              <MdEdit className="h-4 w-4 text-gray-900 dark:text-white" />
            </Link>
          ) : (
            ""
          )}
        </div>
        {user.bio && user.bio?.length > 0 ? (
          <p className="h-full  break-words pt-6 text-sm text-muted-foreground scrollScreen:text-base">
            {user.bio}
          </p>
        ) : (
          <div className="flex h-full items-center justify-center pt-4  text-muted-foreground">
            Biography is not added!
          </div>
        )}
      </div>
    </div>
  );
};

interface LabelAndValueProps {
  label: string;
  value: any;
}

const LabelandValue = ({ label, value }: LabelAndValueProps) => {
  return (
    <div className="flex flex-row gap-3 scrollScreen:gap-12">
      <h1 className="w-[88px] text-sm text-muted-foreground scrollScreen:w-28 scrollScreen:text-base">
        {label}
      </h1>
      <h2 className="max-w-[150px] truncate text-sm font-medium text-gray-900 dark:text-white scrollScreen:max-w-full scrollScreen:text-base">
        {value}
      </h2>
    </div>
  );
};

interface urlsProps {
  urls: SocialLink[];
}

const SocialsDrawer = ({ urls }: urlsProps) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="text-xs hover:underline scrollScreen:text-sm">
          View all
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>User Social links</DrawerTitle>
          <DrawerDescription>
            These are the user&apos;s social media links that we support.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-row flex-wrap  justify-center gap-3 px-6 py-4 scrollScreen:px-12 sm:gap-6 sm:px-24">
          {urls?.map(({ value }, index) => {
            const socialInfo = getSocialIconAndLabel(value);
            if (socialInfo) {
              const { icon: Icon, label } = socialInfo;
              return (
                <a
                  href={value}
                  key={index}
                  className="group flex flex-row items-center gap-1"
                >
                  <Icon className="h-10 w-10 text-primary hover:opacity-80 dark:text-white" />
                  <h1 className="group-hover:underline">@{label}</h1>
                </a>
              );
            }
            return null;
          })}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
