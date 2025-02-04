import dragon from "/dragon.png"

export default function BitcoinAdvantages() {
    const features = [
        {
            icon: "shield",
            title: "Bitcoin Security",
            description:
                "Gain the security advantages of Bitcoin, the most decentralized cryptocurrency, while minimizing reliance on your native token's inflation.",
        },
        {
            icon: "trending-up",
            title: "Bitcoin Liquidity",
            description:
                "The Babylon ecosystem consists of a wide array of protocols focused on providing bitcoin to BSNs to help grow your network.",
        },
        {
            icon: "users",
            title: "Bitcoin Community",
            description:
                "The Babylon Bitcoin staking protocol connects Bitcoin Secured Networks (BSNs) with bitcoin holders, giving you direct access to the largest and strongest community in crypto.",
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white p-6 lg:p-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-4xl mb-12">
                    <h1 className="sm:text-5xl text-3xl font-semibold leading-tight mb-6">
                        Become a Bitcoin Secured Network and take advantage of:
                    </h1>
                    <p className="text-lg text-gray-400">Become a Bitcoin Secured Network and take advantage of:</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl sm:p-6 p-4 space-y-4">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D053A8] to-[#4A25A9] p-4 flex items-center justify-center">
                                <div className="w-8 h-8 text-white">
                                    {feature.icon === "shield" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    )}
                                    {feature.icon === "trending-up" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                            <polyline points="17 6 23 6 23 12" />
                                        </svg>
                                    )}
                                    {feature.icon === "users" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Dragon Mascot */}
                <img
                    src={dragon}
                    alt="Cute dragon mascot"
                    className="lg:block hidden absolute top-5 right-0 w-60 -translate-y-1/5 translate-x-1/5"
                />
            </div>
        </div>
    )
}

