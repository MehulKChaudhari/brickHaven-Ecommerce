'use client';

export const Footer = () => {
    return (
        <footer className="bg-whitp-6 mt-12 text-black shadow-md border-b border-gray-200">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="text-red-600 text-3xl font-bold tracking-wider">
                        <span className="text-yellow-500">Brick</span>Haven
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
