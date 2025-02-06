import {
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Instagram,
    Globe,
    PinIcon as Pinterest,
    Rss,
    MapPin,
    Phone,
    Printer,
} from "lucide-react"
import ball from "/ball.png"

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Globe, href: "#" },
        { icon: Pinterest, href: "#" },
        { icon: Rss, href: "#" },
    ]

    const footerLinks = [
        { text: "About us", href: "#" },
        { text: "Contact us", href: "#" },
        { text: "Help", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Disclaimer", href: "#" },
    ]

    return (
        <footer className="bg-white/[0.07] drop-shadow-md text-white/70 relative z-10 overflow-hidden">
            <img src={ball} alt="" className="absolute top-1/3 left-12 max-w-96 z-[-1]" />
            <img src={ball} alt="" className="absolute top-0 right-9 max-w-96 z-[-1]" />
            <div className="max-w-8xl mx-auto p-6 lg:p-10 space-y-12 pt-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 sm:gap-14 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <h2 className="text-white text-xl font-medium">Grieves - Crypto BlockChain Website</h2>
                        <p className="max-w-2xl">
                            Welcome to Grieves, where we are revolutionizing the way you interact with cryptocurrency and blockchain
                            technology. As a comprehensive platform dedicated to empowering users, businesses, and investors, Grieves
                            provides the tools.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#d053a8] mt-1" />
                            <span>Grieves Company, 234 East, 19th Street, St. louis 10001</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#d053a8]" />
                                <span>(123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Printer className="w-5 h-5 text-[#d053a8]" />
                                <span>(123) 456-7890</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="space-x-4 flex items-center">
                            <h3 className="text-sm">Social Media</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a key={index} href={social.href} className="text-[#d053a8] hover:text-[#8811c5] transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap sm:gap-6 gap-4">
                        {footerLinks.map((link, index) => (
                            <a key={index} href={link.href} className="hover:text-[#d053a8] transition-colors">
                                {link.text}
                            </a>
                        ))}
                    </div>
                    <div className="text-sm">Copyright © 2024 · Stacking.</div>
                </div>
            </div>
        </footer>
    )
}

