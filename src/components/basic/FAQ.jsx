import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import ball from '/ball.png'

export default function FAQ() {
    const [expandedId, setExpandedId] = useState("Q1")

    const faqItems = [
        {
            id: "Q1",
            question: "What is Babylon?",
            answer:
                "Babylon is a suite of security-sharing protocols that bring Bitcoin's unparalleled security to the decentralized world. The latest protocol, Bitcoin Staking, enables Bitcoin holders to stake their Bitcoin to provide crypto-economic security to PoS (proof-of-stake) systems in a trustless and self-custodial way.",
        },
        {
            id: "Q2",
            question: "How does Bitcoin Staking work?",
            answer: "Bitcoin Staking is a self-custodial protocol that allows users to stake their Bitcoin to provide crypto-economic security to PoS (proof-of-stake) systems in a trustless and self-custodial way.",
        },
        {
            id: "Q3",
            question: "What does this staking dApp allow me to do?",
            answer: "Users can stake their Bitcoin to provide crypto-economic security to PoS (proof-of-stake) systems in a trustless and self-custodial way.",
        },
        {
            id: "Q4",
            question: "Does my BTC leave my wallet once staked?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q5",
            question: "Is my BTC safe? Could I get slashed?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q6",
            question: "How long will it take for my stake to become active?",
            answer: "Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q7",
            question: "Do I get rewards for staking?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q8",
            question: "Are there any other ways to stake?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q9",
            question: "Will I pay any fees for staking?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
        {
            id: "Q10",
            question: "Are hardware wallets supported?",
            answer: "Yes, your BTC will leave your wallet once staked. This is a self-custodial protocol. Once your BTC is staked, it will not leave your wallet.",
        },
    ]

    return (
        <div className="bg-black text-white lg:px-5 px-3 pt-14 pb-5">
            <div className="max-w-6xl mx-auto relative z-10">
                <img src={ball} alt="" className="absolute top-1/4 left-1/3 max-w-72 opacity-90 z-[-1]" />
                <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">FAQ</h2>
                <div className="grid grid-cols-1 gap-4">
                    {faqItems.map((item) => (
                        <div key={item.id} className="bg-white/15 border-2 border-gray-600 rounded-xl md:p-6 p-4 space-y-4">
                            <div
                                className="flex justify-between items-start gap-4 cursor-pointer"
                                onClick={() => setExpandedId(expandedId === item.id ? "" : item.id)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={expandedId === item.id}
                            >
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#d053a8] font-medium">{item.id}#</span>
                                        <h3 className="font-medium">{item.question}</h3>
                                    </div>
                                </div>
                                <button
                                    className="flex-shrink-0 w-8 h-8 rounded bg-[#d053a8] flex items-center justify-center"
                                    aria-label={expandedId === item.id ? "Collapse" : "Expand"}
                                >
                                    {expandedId === item.id ? (
                                        <Minus className="w-5 h-5 text-white" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-white" />
                                    )}
                                </button>
                            </div>

                            {expandedId === item.id && item.answer && (
                                <div className="text-gray-400 leading-relaxed pl-8">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

