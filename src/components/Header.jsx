import React from 'react';
export default function Header() {
    return (
        <header className="bg-purple-500 p-4 sticky top-0 shadow-md flex flex-col items-center z-1">
            <h1 className="text-white text-3xl font-bold">PetSnap</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#features" className="text-white hover:text-gray-300">Features</a></li>
                    <li><a href="#gallery" className="text-white hover:text-gray-300">Gallery</a></li>
                    <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
