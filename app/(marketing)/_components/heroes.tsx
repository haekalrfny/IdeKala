import Image from "next/image";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          <Image
            src="/office.svg"
            fill
            className="object-contain block dark:hidden"
            alt="Documents"
          />
          <Image
            src="/office-dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
}
