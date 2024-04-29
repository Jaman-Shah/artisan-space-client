import React from "react";
import { Fade } from "react-awesome-reveal";

const PaymentMethodSection = () => {
  return (
    <Fade>
      <div>
        <div className="py-4">
          <div className="divider divider-info px-12">
            <h1 className="font-extrabold text-xl md:text-3xl">
              Our <span className="text-orange-600">Payment</span>{" "}
              <span className="text-blue-600">Methods</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="h-[120px]">
            <img
              src="https://i.ibb.co/ZKdCB3r/bkash.jpg"
              className="w-full h-full rounded-lg "
              alt=""
            />
          </div>
          <div className="h-[120px]">
            <img
              src="https://i.ibb.co/D4SPxrs/rocket-banner.png"
              className="w-full h-full rounded-lg "
              alt=""
            />
          </div>
          <div className="h-[120px]">
            <img
              src="https://i.ibb.co/n8dcs3y/Nagad-Logo-wine.png"
              className="w-full h-full rounded-lg "
              alt=""
            />
          </div>
          <div className="h-[120px]">
            <img
              src="https://i.ibb.co/pnwjLvf/Pay-Pal-Thumbnail.jpg"
              className="w-full h-full rounded-lg "
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PaymentMethodSection;
