'use client';
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-white p-4 text-black shadow-md border-t border-gray-200 mt-12">
            <div className="max-w-6xl mx-auto flex justify-between items-center flex-col sm:flex-row gap-2">
                <div className="flex items-center">
                    <div className="text-red-600 text-3xl font-bold tracking-wider">
                        <Image src="/brandlogo.png" alt="Brand Logo" width={150} height={150} />
                    </div>
                </div>
                <div className="text-gray-400 text-sm">
                    A cozy spot for all things LEGO.
                </div>
            </div>
            <div className="text-center text-gray-500 text-xs mt-4">
                &copy; 2024 BrickHaven. All rights reserved.
            </div>
        </footer>
    );
};
