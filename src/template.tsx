import React from 'react';

interface TemplateProps {
    children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {

    return (
        <div className="relative min-h-screen font-inter overflow-auto flex flex-col items-center justify-between">
            <div
                id="banner-1"
                className="min-h-screen bg-[#151515] z-0 fixed top-0 left-0 w-1/4"
                style={{ transform: 'translateY(100%)' }}
            />
            <div
                id="banner-2"
                className="min-h-screen bg-[#151515] z-0 fixed top-0 left-1/4 w-1/4"
                style={{ transform: 'translateY(100%)' }}
            />
            <div
                id="banner-3"
                className="min-h-screen bg-[#151515] z-0 fixed top-0 left-2/4 w-1/4"
                style={{ transform: 'translateY(100%)' }}
            />
            <div
                id="banner-4"
                className="min-h-screen bg-[#151515] z-0 fixed top-0 left-3/4 w-1/4"
                style={{ transform: 'translateY(100%)' }}
            />
            
            {children}
        </div>
    );
}
