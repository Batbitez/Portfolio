import React from "react";
import Gallery from "./Gallery";
import { drawings } from "../data/drawings";

const DrawingsGallery: React.FC = () => {
  return <Gallery images={drawings} />;
};

export default DrawingsGallery;
