// src/vite-imagetools.d.ts
declare module "*?*" {
  const srcset: {
    src: string;
    width: number;
    format: string;
  }[];
  export default srcset;
}
