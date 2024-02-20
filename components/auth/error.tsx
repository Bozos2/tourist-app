import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const AuthError = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <ExclamationTriangleIcon className="text-destructive" />
      <p>Oops! Something went wrong!</p>
    </div>
  );
};
