import React from 'react'

const GradientCard = ({ children, className }) => {
    return (
        <div className={`${className} relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}>
            {children}
        </div>
    )
}

export default GradientCard