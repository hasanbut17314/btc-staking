import x from "/x.png"

export default function StakingDiagram() {
    return (
        <div className="min-h-screen bg-black text-white p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 md:gap-16 items-center">
                    {/* Left Panel - Bitcoin Holders */}
                    <div className="relative rounded-2xl bg-[#111111] p-8 overflow-hidden">
                        {/* Gradient Border */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#d053a8] to-[#8811c5] -z-10" />

                        <div className="space-y-8">
                            {/* Grid of Purple Squares */}
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 49 }).map((_, i) => (
                                    <div key={i} className="aspect-square bg-[#8811c5] rounded-sm" />
                                ))}
                            </div>

                            {/* Button */}
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-[#8811c5] to-[#d053a8] text-white px-6 py-3 rounded-full text-lg">
                                    Bitcoin holders
                                </button>
                            </div>

                            {/* Subtitle */}
                            <p className="text-center text-gray-400">Hold bitcoin and receive rewards turstlessly</p>
                        </div>
                    </div>

                    {/* Center Connection */}
                    <div className="flex flex-col items-center gap-6">
                        {/* Top Arrow */}
                        <div className="flex items-center gap-2">
                            <div className="h-px w-16 bg-white" />
                            <span className="bg-white text-black text-sm px-3 py-1 rounded">Liquidity & Security</span>
                            <div className="h-px w-16 bg-white" />
                        </div>

                        {/* Crystal Image */}
                        <img
                            src={x}
                            alt="Crystal connection"
                            className="w-32 h-32 object-contain rotate-[154deg]"
                        />

                        {/* Bottom Arrow */}
                        <div className="flex items-center gap-2">
                            <div className="h-px w-16 bg-white" />
                            <span className="bg-white text-black text-sm px-3 py-1 rounded">Rewards</span>
                            <div className="h-px w-16 bg-white" />
                        </div>
                    </div>

                    {/* Right Panel - Bitcoin Secure Network */}
                    <div className="relative rounded-2xl bg-[#111111] p-8 overflow-hidden">
                        {/* Gradient Border */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#d053a8] to-[#8811c5] -z-10" />

                        <div className="space-y-8">
                            {/* Grid of Gray Squares */}
                            <div className="grid grid-cols-5 gap-2">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="aspect-square bg-gray-400 rounded-sm" />
                                ))}
                            </div>

                            {/* Button */}
                            <div className="flex justify-center">
                                <button className="bg-gradient-to-r from-[#8811c5] to-[#d053a8] text-white px-6 py-3 rounded-full text-lg">
                                    Bitcoin Secure network
                                </button>
                            </div>

                            {/* Subtitle */}
                            <p className="text-center text-gray-400">Receive bitcoin security and liquidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

