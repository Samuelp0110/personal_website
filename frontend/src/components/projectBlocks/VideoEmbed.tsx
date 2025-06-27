import React from "react";

interface VideoEmbedProps {
  url?: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  aspectRatio?: string; // e.g., "16/9", "4/3"
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  url,
  title = "Embedded video",
  autoplay = false,
  muted = false,
  aspectRatio = "16/9",
}) => {
  const fallbackImage = "/NoImage.svg";

  // If no valid URL, show fallback image
  if (!url?.trim()) {
    return (
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md">
        <img
          src={fallbackImage}
          alt="No video available"
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  // Determine platform (YouTube or Vimeo)
  let embedUrl = url.trim();
  const isYouTube =
    embedUrl.includes("youtube.com") || embedUrl.includes("youtu.be");
  const isVimeo = embedUrl.includes("vimeo.com");

  // Transform to embed URL if needed
  if (isYouTube) {
    const videoId =
      embedUrl.split("v=")[1]?.split("&")[0] || embedUrl.split("/").pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
    embedUrl += `?rel=0&autoplay=${autoplay ? "1" : "0"}&mute=${
      muted ? "1" : "0"
    }`;
  } else if (isVimeo) {
    const videoId = embedUrl.split("/").pop();
    embedUrl = `https://player.vimeo.com/video/${videoId}`;
    embedUrl += `?autoplay=${autoplay ? "1" : "0"}&muted=${muted ? "1" : "0"}`;
  } else {
    // Not supported platform
    return (
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md">
        <img
          src={fallbackImage}
          alt="Unsupported video platform"
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md aspect-[${aspectRatio}]`}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
