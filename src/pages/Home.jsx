import React from 'react'
import WhatHappens from '../components/basic/WhatHappens'
import BitcoinAdvantages from '../components/basic/BitcoinAdvantages'
import SecureNetwork from '../components/basic/SecureNetwork'
import SecurityFeatures from '../components/basic/SecurityFeatures'
import Partners from '../components/basic/Partners'

const Home = () => {
    return (
        <main>
            <WhatHappens />
            <BitcoinAdvantages />
            <SecureNetwork />
            <SecurityFeatures />
            <Partners />
        </main>
    )
}

export default Home