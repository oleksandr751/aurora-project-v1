import React from "react";
import MusicCard from "./music_components/MusicCard";
import { music } from "./music_components/music";
const Music = () => {
  return (
    <div>
      {music.map((track, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MusicCard
            name={track.name}
            alt={track.alt}
            author={track.author}
            image={track.image}
            src={track.src}
          />
        </div>
      ))}
    </div>
  );
};

export default Music;
