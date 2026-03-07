import React from "react";
import Gallery from "./Gallery";
import { models } from "../data/models";

const ModelsGallery: React.FC = () => {
  return <Gallery images={models} />;
};

export default ModelsGallery;
