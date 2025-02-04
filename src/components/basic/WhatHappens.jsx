import whatpic from "/whathappens.png"

export default function WhatHappens() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center">
            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
                {/* 3D Shape Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={whatpic}
                        alt="Abstract 3D shape"
                        className="w-full h-auto max-w-[400px] mx-auto"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">What happens on Bitcoin stays on Bitcoin</h1>
                        <p className="text-gray-400">No more wrapping or pegging. Stake bitcoin directly and securely.</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex justify-between border-t border-gray-500 py-6">
                            <div className="flex items-baseline gap-4">
                                <span className="text-xl font-medium">1.</span>
                                <h2 className="text-xl text-gray-300">Self-custodial</h2>
                            </div>
                            <p className="text-gray-400 pl-8">Your keys. Your coins.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex justify-between border-t border-gray-500 py-6">
                            <div className="flex items-baseline gap-4">
                                <span className="text-xl font-medium">2.</span>
                                <h2 className="text-xl text-gray-300">Request unbonding at anytime</h2>
                            </div>
                            <p className="text-gray-400 pl-8">Your bitcoin, your rules. Request unbonding at any time.</p>
                        </div>
                    </div>

                    {/* Decorative Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50" />
                </div>
            </div>
        </div>
    )
}

