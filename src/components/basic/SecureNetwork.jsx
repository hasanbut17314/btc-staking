import ball from "/ball.png"
import bg from "/securebg.png"

export default function SecureNetwork() {
    const navItems = ["Bitcoin Stakers", "Bitcoin Secured Networks", "Finality Providers"]
    const actions = ["Stake", "Secure", "Receive"]

    return (
        <div className=" bg-black text-white relative z-10 p-6 lg:p-12">
            <img src={ball} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-96" />
            <img src={bg} alt="" className="absolute top-10 rigth-0 max-w-64 h-full z-[-1] opacity-40" />
            {/* Navigation */}
            <nav className="max-w-7xl mx-auto md:mb-20 mb-10">
                <ul className="flex justify-between border-b border-white/10 pb-4">
                    {navItems.map((item, index) => (
                        <li key={index} className={`sm:text-lg text-sm ${index === 0 ? "text-[#d053a8]" : ""}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-12 items-center z-10">
                <div className="sm:space-y-12 space-y-8">
                    {/* Main Text */}
                    <div className="space-y-6">
                        <h1 className="sm:text-4xl text-3xl font-medium leading-tight max-w-4xl text-gray-300">
                            Receive rewards by locking bitcoin in a technically secure way to help validate other blockchains. No wrapping, no pegging, no bridging to another network, and it all happens within your own wallet.
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-[#d053a8] to-[#8811c5] text-white rounded-lg px-8 py-3 text-lg hover:opacity-90 transition-opacity">
                        Learn more
                    </button>
                </div>

                {/* Action Indicators */}
                <div className="flex flex-col gap-10">
                    {actions.map((action, index) => (
                        <div key={index} className="flex items-center gap-5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d053a8] to-[#8811c5]" />
                            <span className="text-lg">{action}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

