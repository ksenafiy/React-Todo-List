import { useEffect, useState } from "react"

const QuoteGenerator = () => {
    const url = "http://localhost:3001/data"
    const [showPost, setshowPost] = useState([])
    let displayData

    async function pullData() {
        const response = await fetch(url)
        const responseData = await response.json()
        let random = Math.floor(Math.random()*Object.keys(responseData).length)
        displayData = responseData.map(quote => {
            if (quote.id == random) {
                return(
                    <div key={new Date().getTime()}>
                        <h3 key={quote.id} className="font-semibold">{quote.title}</h3>
                        <p key={new Date().getTime()} className="text-sm text-slate-400">{quote.author}</p>
                     </div>  
                )
            }
        })
        setshowPost(displayData)
    }

    useEffect(() => {
        pullData()
    }, [])

    return (
        <div>
             <button onClick={pullData} className="mt-7 mb-4 bg-emerald-900 px-6 py-2 rounded-md text-md text-white font-bold transition-all hover:bg-emerald-950 hover:ease-in-out">Get some motivation</button>
             {showPost}
        </div>
    )
}

export default QuoteGenerator