import WhatHappens from '../components/basic/WhatHappens'
import BitcoinAdvantages from '../components/basic/BitcoinAdvantages'
import SecureNetwork from '../components/basic/SecureNetwork'
import SecurityFeatures from '../components/basic/SecurityFeatures'
import Partners from '../components/basic/Partners'
import SecondSec from '../components/basic/SecondSec'
import StakingDiagram from '../components/basic/Diagram'
import Whitepaper from '../components/basic/WhitePaper'

const Home = () => {
    return (
        <main>
            <SecondSec />
            <WhatHappens />
            <BitcoinAdvantages />
            <StakingDiagram />
            <SecureNetwork />
            <Whitepaper />
            <SecurityFeatures />
            <Partners />
        </main>
    )
}

export default Home