import hero2 from "../../assets/hero/hero_2.png"
import Ellipse from "../../assets/hero/ellipse.png"

export default function BitcoinStaking() {
  return (
    <div className="min-h-screen hero md:p-12 p-6 relative">

        <div className="img absolute -top-20 left-0">
          <img src={Ellipse} width={500} alt="" />
        </div>

        <div className="img absolute -bottom-20 right-0">
          <img src={Ellipse} width={500} alt="" />
        </div>

        <div className="flex items-center flex-wrap justify-between gap-20 ">

          <div className="space-y-12 w-full md:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="space-y-4 md:mb-12 mb-6 max-w-2xl">
              <h1 className="md:text-7xl text-4xl font-bold tracking-tight">Bitcoin Staking</h1>
              <p className="text-xl text-gray-400">Powering Web3. Trustlessly.</p>
            </div>
          </div>
            <div className="space-y-8">
          <div className="md:w-[70%] w-full">
          <div className="flex pb-2 md:text-2xl gap-4 text-md md:justify-around items-center mb-1">
        <span className="font-mono">Staked: 5670B.43 BTC</span>
        <div className="w-1 h-12 bg-white"></div>
        <span className="font-mono">$5.97B</span>
      </div>
      <div className="md:text-2xl text-lg pt-4 border-t border-gray-200 text-center">
        Self-Custodial Bitcoin Staking
      </div>

          </div>
            </div>

            <div className="flex items-center  justify-between gap-4 md:mr-40 pt-8">
              <button className="btn">
                Staking Interface
              </button>
              <div className="flex items-center -space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gray-400" />
                ))}
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">9+</div>
              </div>
            </div>
          </div>

          <div className="relative ">
            <img src={hero2} alt="Hero 2" className="w-full md:w-[90%]" />
          </div>
        </div>    
    </div>
  )
}

