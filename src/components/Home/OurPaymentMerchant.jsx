import React from 'react';
import bKashLogo from '../../../public/bkash.png';
import nagadLogo from '../../../public/nagad.png';
import rocketLogo from '../../../public/roket.png';
import sslcommerzLogo from '../../../public/ssl.png';
import Image from 'next/image';
const OurPaymentMerchant = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md container mx-auto">
            <h2 className="text-xl font-bold text-center mb-4">Our Payment Merchants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center     p-4 shadow-md transition-all cursor-pointer rounded-md">
                    <Image src={bKashLogo} alt="bKash Logo" className="w-24 h-24 mb-2 object-contain" />
                    <p className="text-center text-gray-700">bKash</p>
                    <p className="text-center text-gray-500">01990779766</p>
                    <p className="text-center text-gray-500">01309014614</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 shadow-md transition-all cursor-pointer rounded-md">
                    <Image src={nagadLogo} alt="Nagad Logo" className="w-24 h-24 mb-2 object-contain" />
                    <p className="text-center text-gray-700">Nagad</p>
                    <p className="text-center text-gray-500">01309014614</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 shadow-md transition-all cursor-pointer rounded-md">
                    <Image src={rocketLogo} alt="Rocket Logo" className="w-24 h-24 mb-2 object-contain" />
                    <p className="text-center text-gray-700">Rocket</p>
                    <p className="text-center text-gray-500">013090146143</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 shadow-md transition-all cursor-pointer rounded-md">
                    <Image src={sslcommerzLogo} alt="SSLCOMMERZ Logo" className="w-24 h-24 mb-2 object-contain" />
                    <p className="text-center text-gray-700">SSLCOMMERZ</p>
                </div>
            </div>
        </div>
    );
};

export default OurPaymentMerchant
