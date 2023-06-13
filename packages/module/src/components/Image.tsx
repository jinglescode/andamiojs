import React from "react";

export function Image({
  src,
  caption = undefined,
}: {
  src: string;
  caption?: string;
}): React.ReactElement {
  return (
    <figure className={`h-auto mx-auto`}>
      <img className="h-auto max-w-full rounded-lg" src={src} />
      {caption && (
        <figcaption className="mt-2 text-sm text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
