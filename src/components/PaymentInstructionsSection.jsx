import React from 'react';

const PaymentInstructionsSection = () => {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-2xl text-gray-700 mb-12">
          How to Pay
        </h2>

        <div className="space-y-12 text-xl lg:text-2xl text-gray-800 max-w-2xl">
          <p>
            Send Amount via Bank Transfer/PayPal/Wise/
            <br />
            Flutterwave
          </p>
          
          <div>
            <p>Email your name and payment proof to:</p>
            <p className="font-bold text-black mt-1 break-all">
              sandrabullockannette909@gmail.com
            </p>
          </div>

          <p>
            You'll recieve an email + Purchase in 48 hours
          </p>
        </div>

      </div>
    </section>
  );
};

export default PaymentInstructionsSection;