/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button } from "../../ui/button";

interface SplitHeroProps {
  imageAlignment: "left" | "right";
  textAlignment: "left" | "center" | "right";
  splitWidth: "1/2" | "1/3";
  title: string;
  subTitle: string;
  image: string;
  altText: string;
  hasCTA: boolean;
  buttonText?: string;
  buttonLink?: any;
  makeFullBleed: boolean;
}

const SplitHero: React.FC<SplitHeroProps> = ({
  imageAlignment,
  splitWidth,
  textAlignment,
  title,
  subTitle,
  image,
  altText,
  hasCTA,
  buttonText,
  buttonLink,
  makeFullBleed,
}) => {
  const textWidth =
    imageAlignment === "right"
      ? splitWidth === "1/2"
        ? "md:w-1/2"
        : "md:w-2/3"
      : splitWidth === "1/2"
      ? "md:w-1/2"
      : "md:w-2/3";
  const imageWidth =
    imageAlignment === "right"
      ? splitWidth === "1/2"
        ? "md:w-1/2"
        : "md:w-1/3"
      : splitWidth === "1/2"
      ? "md:w-1/2"
      : "md:w-1/3";

  const textContent = (
    <div className={`flex flex-col ${textWidth} my-3`}>
      <div className="flex flex-col grow md:px-10 bg-white justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col text-gray-800 max-md:mt-10">
            <h2
              className={`mt-6 text-2xl text-${textAlignment} tracking-[5.25px] font-medium`}
            >
              {title}
            </h2>
            <span
              className="mt-3 text-xl leading-8"
              dangerouslySetInnerHTML={{ __html: subTitle }}
            ></span>
          </div>
          {hasCTA && (
            <Button
              variant="destructive"
              className="self-start px-5 py-2.5 mt-2 text-base tracking-[3.15px] max-md:mt-10"
              asChild
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className={`flex flex-col ${imageWidth}`}>
      <div className="flex flex-col justify-center">
        <img
          loading="lazy"
          src={image}
          alt={altText}
          className="object-cover w-full aspect-[0.92] rounded-md"
        />
      </div>
    </div>
  );

  return (
    <div
      className={`mb-6 ${
        makeFullBleed ? "w-screen  ml-[calc(50%-50vw)] max-h-full" : ""
      }`}
    >
      <div className="flex max-md:flex-col align-center">
        {imageAlignment === "left" ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
};

export default SplitHero;
