import Button from "@/components/common/buttons";
import React from "react";

const Cta = () => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col max-w-3xl text-center py-20 lg:py-36 px-6">
      <div className="home-header bold lg:px-30 px-0 pb-6">
        Experience Seamless Swaps in Minutes
      </div>
      <div className="home-text-sm pb-6">
        Ready to transform your cryptocurrency into spendable naira? Join
        thousands of Nigerians who have discovered the fastest way to bridge the
        crypto-fiat gap.
      </div>
      <div>
        <Button variant="home"> Start swapping now</Button>
      </div>
    </div>
  );
};

export default Cta;
