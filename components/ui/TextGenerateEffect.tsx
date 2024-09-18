"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { Cover } from "./SparcleText/Cover";

export const TextGenerateEffect = ({
  words,
  specialWords,
  className,
}: {
  words: string;
  specialWords: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={"dark:text-white text-black opacity-0"}
            >
              {word}{" "}
            </motion.span>
          );
        })}

        <Cover>
          <motion.span
            className={"text-primary"}
          >
            {specialWords}
          </motion.span>
        </Cover>
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-slate text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
