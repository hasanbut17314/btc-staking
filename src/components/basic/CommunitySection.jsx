export default function CommunitySection() {
    const socialPlatforms = [
        {
            number: 1,
            title: "Discord",
            description: "Come join our vibrant community and share your thoughts and experiences.",
            buttonText: "Join Discord",
            buttonLink: "#",
        },
        {
            number: 2,
            title: "Twitter / X",
            description: "Join the social discussions.",
            buttonText: "Follow Babylon",
            buttonLink: "#",
        },
        {
            number: 3,
            title: "Telegram",
            description: "Stay updated on all things Babylon.",
            buttonText: "Join Telegram",
            buttonLink: "#",
        },
        {
            number: 4,
            title: "Join the Community",
            description: "Join the Babylon forum to discuss all things Babylon.",
            buttonText: "Forum",
            buttonLink: "#",
        },
    ]

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            {/* Top button */}
            <div className="mb-12">
                <a
                    href="#"
                    className="inline-block px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-700 to-pink-500 hover:opacity-90 transition-opacity"
                >
                    Join the Babylon community
                </a>
            </div>

            {/* Social platforms list */}
            <div className="space-y-4">
                {socialPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 md:p-6">
                        {/* Left side with number and info */}
                        <div className="flex items-center gap-4 md:gap-6">
                            {/* Number badge */}
                            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-2xl md:text-3xl font-bold">{platform.number}</span>
                            </div>

                            {/* Title and description */}
                            <div>
                                <h3 className="text-white text-lg md:text-xl font-semibold">{platform.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base">{platform.description}</p>
                            </div>
                        </div>

                        {/* Right side button */}
                        <a
                            href={platform.buttonLink}
                            className="font-medium btn"
                        >
                            {platform.buttonText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

