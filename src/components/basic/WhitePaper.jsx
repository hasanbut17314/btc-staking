import pic from '/whitepaper.png'

export default function Whitepaper() {
    return (
        <section className="max-w-6xl mx-auto py-16">
            <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
                {/* Left Column - Black Background */}
                <div className="p-8 md:p-12 relative md:w-1/2">
                    {/* Image */}
                    <img src={pic} alt="" className='max-h-[500px] ms-auto' />
                </div>

                {/* Right Column - White Background */}
                <div className="p-8 md:p-12 flex flex-col justify-center items-center md:w-1/2 relative">
                    {/* Decorative Dots */}
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        <h5 className="text-lg">Whitepaper</h5>
                        <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    </div>

                    {/* Documents Heading */}
                    <div className="mt-4">
                        <h4 className="font-semibold text-lg">Read YBTC</h4>
                        <h3 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            DOCUMENTS
                        </h3>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#view"
                            className="btn hover:opacity-90 transition-opacity !rounded-full"
                        >
                            VIEW
                        </a>
                        <a
                            href="#download"
                            className="btn !rounded-full hover:opacity-90 transition-opacity"
                        >
                            DOWNLOAD DOC
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

