// Random Quote Generator with Auto Refresh

import React, { useEffect, useState } from 'react'

const QuoteGenerator = () => {
    const [quote, Setquote] = useState("")

    const getQuate = () => {
        const quotes = ["Stay hungry", "Code. Sleep. Repeat.", "Think different"];
        const random = quotes[Math.floor(Math.random() * quote.length )]
        Setquote(random);
    }

    useEffect(() => {
        getQuate();
        const interval = setInterval(getQuate, 5000)
        return() => {clearInterval(interval)}
    }, [])

  return (
    <div>
         <h2>💬 {quote}</h2>
    </div>
  )
}

export default QuoteGenerator