import { ImageIcon } from "lucide-react";

interface FallbackImageProps {
  width?: string;
  height?: string;
  size?: string;
  rounded?: string;
  iconSize?: string;
  className?: string;
}
export default function FallbackImage({
  width = "w-full",
  height = "aspect-square",
  size = "",
  rounded = "rounded-box",
  iconSize = "size-16",
  className = "",
}: FallbackImageProps) {
  const blockClasses = `mb-2 ${rounded} ${width} ${height} ${size} object-cover bg-muted  relative ${className}`;
  const iconClasses = `text-secondary-foreground ${iconSize} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
  return (
    <div className={blockClasses}>
      <ImageIcon className={iconClasses} />
    </div>
  );
}
