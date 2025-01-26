export function cdnUrl(
  imagePath: string | undefined,
  width?: number,
  height?: number,
): string {
  // Base URL for ImageKit
  const imagekitBaseUrl = "https://ik.imagekit.io/wo0srdcz6/";
  if (!imagePath) {
    // Return a default image URL or handle as needed
    return ""; // Replace with your default image path
  }
  // Create a URL object from the imagePath
  const urlObject = new URL(imagePath);

  const pathSegments = urlObject.pathname.split("/");
  const fileName = pathSegments[pathSegments.length - 1];

  // Construct the transformation string
  let transformation = "";
  if (width || height) {
    const transformations: string[] = [];
    if (width) {
      transformations.push(`w-${width}`);
    }
    if (height) {
      transformations.push(`h-${height}`);
    }
    transformation = `?tr=${transformations.join(",")}`;
  }

  // Construct the full URL
  // return `${imagekitBaseUrl}${pathname}${transformation}`; //pathname doesn't currently work
  return `${imagekitBaseUrl}${fileName}${transformation}`;
}
