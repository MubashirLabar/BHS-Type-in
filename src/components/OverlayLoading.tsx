import React from "react";
import SpinLoader from "./SpinLoader";

const OverlayLoading = ({
  className,
  textLoading = false,
}: {
  className?: string;
  textLoading?: boolean;
}) => {
  return (
    <div className="fixed inset-0 z-[99999999] bg-white/80 flex flex-col items-center justify-center gap-y-4 backdrop-blur-[0px] margins">
      {textLoading ? (
        <div className="loading-text">
          <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-black text-center">
            Please wait while we provision your school account
            <span className="dot dot-one"> .</span>
            <span className="dot dot-two"> .</span>
            <span className="dot dot-three"> .</span>
          </div>
        </div>
      ) : (
        <SpinLoader className={className} />
      )}
    </div>
  );
};

export default OverlayLoading;
