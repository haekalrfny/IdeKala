import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex gap-x-1">
      <Image src="/idekala.png" height="30" width="30" alt="Logo" className="block dark:hidden" />
      <Image src="/idekala-dark.png" height="30" width="30" alt="Logo" className="hidden dark:block" />
      <p className={cn("font-semibold mt-1.5", font.className)}>IdeKala</p>
    </div>
  );
};
