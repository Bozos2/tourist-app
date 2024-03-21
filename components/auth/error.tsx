import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const AuthError = () => {
  return (
    <div className="mx-3 flex flex-col items-center rounded-md border border-input bg-background px-12  py-6 text-sm shadow-sm  dark:border-0 dark:bg-transparent/40">
      <ExclamationTriangleIcon className="mt-4 h-32 w-32 text-destructive" />
      <p className="pt-4 text-center text-2xl">Oops! Something went wrong!</p>
    </div>
  );
};
