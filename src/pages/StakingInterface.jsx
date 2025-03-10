import React from 'react'
import { Layers, Lock, Clock, Users } from "lucide-react"
import { useState } from "react"
import FAQ from '../components/basic/FAQ'
import wallet from '/wallet.png'
import ball from '/ball.png'

const statusCards = [
    {
        icon: Layers,
        title: "Staking Window",
        value: "closed",
        textColor: "text-gray-400",
    },
    {
        icon: Lock,
        title: "Confirmed TVL",
        value: "56695.11 BTC ($5.64B)",
        textColor: "text-white",
    },
    {
        icon: Clock,
        title: "Pending Stake",
        value: "0 BTC",
        textColor: "text-white",
    },
    {
        icon: Users,
        title: "Stakers",
        value: "135.29K",
        textColor: "text-white",
    },
]

const providers = Array(5).fill({
    name: "OKX Earn",
    btcPk: "3746...032c",
    totalDelegation: "334.8 BTC",
    commission: "3%",
})
const StakingInterface = () => {

    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className='pb-16 pt-10 bg-black'>
            <div className="max-w-7xl mx-auto text-white p-4 lg:p-6  relative z-10">
                <img src={ball} alt="bg" className='absolute bottom-5 right-0 max-w-72 object-cover z-[-1] opacity-80' />
                {/* Status Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                    {statusCards.map((card, index) => (
                        <div key={index} className="bg-white/15 border-2 border-gray-600 rounded-xl p-4 flex items-center gap-4 min-h-[100px]">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <card.icon className="w-9 h-9 text-[#d053a8]" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">{card.title}</p>
                                <p className={`text-lg font-medium ${card.textColor}`}>{card.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,330px] gap-6">
                    {/* Staking Section */}
                    <div className="bg-white/15 border-2 border-gray-600 rounded-xl p-6">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">Staking</h2>
                            <p className="text-gray-400">Step-1: Select a finality provider</p>

                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-[#1a1a1a] rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d053a8]"
                                />
                            </div>

                            {/* Providers Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-gray-400">
                                            <th className="pb-4">Finality Provider</th>
                                            <th className="pb-4">BTC PK</th>
                                            <th className="pb-4">Total Delegation</th>
                                            <th className="pb-4">Commission</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {providers.map((provider, index) => (
                                            <tr key={index} className="border-t border-gray-800">
                                                <td className="py-4">
                                                    <label className="flex items-center gap-3">
                                                        <input
                                                            type="checkbox"
                                                            className="w-5 h-5 rounded border-gray-600 text-[#d053a8] focus:ring-[#d053a8]"
                                                        />
                                                        {provider.name}
                                                    </label>
                                                </td>
                                                <td className="py-4">{provider.btcPk}</td>
                                                <td className="py-4">{provider.totalDelegation}</td>
                                                <td className="py-4">{provider.commission}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Connect Wallet Section */}
                    <div className="bg-white/15 border-2 border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-[72px] h-auto flex items-center justify-center">
                            <img src={wallet} alt="Wallet" className='w-full' />
                        </div>
                        <h3 className="text-xl font-medium">Connect wallet</h3>
                        <p className="text-gray-400">Please connect wallet to start staking</p>
                        <button className="w-full bg-gradient-to-r from-[#8811c5] to-[#d053a8] text-white rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default StakingInterface