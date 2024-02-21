import { Navbar } from "./_components/navbar";

interface LayoutProtectedProps {
  children: React.ReactNode;
}

const LayoutProtected = ({ children }: LayoutProtectedProps) => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutProtected;
