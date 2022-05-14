import React from "react";

const ImageContainer: React.FC<{ className: string; src: string }> = ({
  className,
  src,
}: {
  className: string;
  src: string;
}) => {
  return (
    <img src={src} className={className} alt="Imagem de uma pessoa escalando" />
  );
};

export default ImageContainer;
