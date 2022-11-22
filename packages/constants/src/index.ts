export type ImageType = "LISTING" | "COVERPHOTO";

export const IMAGE_DIMENSIONS = {
  LISTING: {
    desktop: { width: 400, height: 400 },
  },
  COVERPHOTO: {
    desktop: { width: 1600, height: 600 },
    mobile: { width: 800, height: 300 },
  },
} as const;
// satisfies {
//   [type in ImageType]: {
//     desktop: { width: number; height: number },
//     mobile?: { width: number; height: number },
//   }
// };
