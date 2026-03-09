import { useState } from "react";
import DrawingsGallery from "../components/DrawingsGallery";
import ModelsGallery from "../components/ModelsGallery";

export default function Portfolio() {
  // State for active tab: "drawings" or "models"
  const [activeTab, setActiveTab] = useState("drawings");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 justify-center mb-8">
        <button
          onClick={() => setActiveTab("drawings")}
          className={`rounded-full px-8 py-2 border transition ${
            activeTab === "drawings"
              ? "bg-charcoal text-white"
              : "bg-dark-gray text-gray-400 hover:scale-110 hover:bg-black hover:text-white"
          }`}
        >
          2D Illustrations
        </button>
        <button
          onClick={() => setActiveTab("models")}
          className={`rounded-full px-8 py-2 border transition ${
            activeTab === "models"
              ? "bg-charcoal text-white"
              : "bg-dark-gray text-gray-400 hover:scale-110 hover:bg-black hover:text-white"
          }`}
        >
          3D Models
        </button>
      </div>

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto relative min-h-125">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            activeTab === "drawings" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <DrawingsGallery />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            activeTab === "models" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <ModelsGallery />
        </div>
      </div>
    </div>
  );
}
