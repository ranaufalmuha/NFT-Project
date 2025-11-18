import { PROJECT_NAME } from "@/shared/utils/const";

export default function HorizontalLogo({
  className = "text-2xl",
}: {
  className?: string;
}) {
  return (
    <div className="">
      <span className={`font-sefa ${className}`}>{PROJECT_NAME}</span>
    </div>
  );
}
