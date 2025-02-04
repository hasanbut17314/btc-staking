import pic1 from "/security1.png"
import pic2 from "/security2.png"
import pic3 from "/security3.png"

export default function SecurityFeatures() {
    const features = [
        {
            title: "Decentralized",
            description: "250+ Finality Providers across the globe are integrated with the Babylon bitcoin staking protocol.",
            image: pic1,
            tags: ["Finality Providers"],
        },
        {
            title: "Secured and audited",
            description: "Dedicated to security, including thorough audits, bug bounty programs, and expert evaluations.",
            image: pic2,
            tags: ["Audit: Coinspect", "Audit: Zellic", "Audit: Cantina Security Competition", "Bug Bounty"],
        },
        {
            title: "Open Sourced",
            description: "Enabling ongoing contributions and improvements from developers worldwide.",
            image: pic3,
            tags: ["Github"],
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-4">Bitcoin Security: Unparalleled</h1>
                    <p className="text-gray-400">Powered by Babylon Bitcoin staking.</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="relative rounded-2xl bg-[#111111] sm:p-8 p-5 overflow-hidden">
                            {/* Image */}
                            <img src={feature.image} alt={feature.title} className="max-w-32 mx-auto mb-8 min-h-28" />
                            {/* Gradient Border */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#d053a8] to-[#8811c5] -z-10" />

                            {/* Content */}
                            <div className="space-y-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-center">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                                {/* Tags */}
                                <div className="space-y-3">
                                    {feature.tags.map((tag, tagIndex) => (
                                        <div key={tagIndex} className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#d053a8] to-[#8811c5]" />
                                            <span className="text-sm text-gray-300">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

