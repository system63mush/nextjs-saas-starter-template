import React from "react";
import FeatureCard from "./FeatureCard";
import {
  SiTailwindcss,
  SiStripe,
  SiActigraph,
  SiDocsify,
  SiAmazongames,
  SiActix,
  SiGoogledataproc, SiGoogleappsscript
} from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiActigraph,
      title: "Dynamic 5v5 Matches",
      description: "Dive into thrilling, fast-paced soccer action with real-time team battles.",
    },
    {
      icon: SiDocsify,
      title: "Unique Character Abilities",
      description: "Choose your character and unlock powerful skills to dominate the field.",
    },
    {
      icon: SiAmazongames,
      title: "Multiple Game Modes",
      description: "Enjoy different playstyles with modes like quick matches, tournaments, and more.",
    },
    {
      icon: SiActix,
      title: "Customization",
      description: "Personalize your character’s appearance, abilities, and gear to suit your playstyle.",
    },
    {
      icon: SiGoogledataproc,
      title: "Constant Updates",
      description: "New content, characters, and events keep the game fresh and exciting.",
    },
    {
      icon: SiGoogleappsscript,
      title: "Community Engagement",
      description: "Join the lively community, share tips, and participate in events.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Goalbound offers an action-packed, ever-evolving soccer experience with unique characters, intense gameplay, and a strong community.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
