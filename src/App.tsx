import { useState } from "react"
import "./index.css"

interface IPoems {
   explanation: string
   poem: string
}

function App() {
   const [poem, setPoem] = useState<IPoems | null>(null)
   const [poemNumber, setPoemNumber] = useState(0)
   const [error, setError] = useState<string | null>(null)
   const [isShowingDesc, setShowDescription] = useState(false)

   const isInitialState = poemNumber === 0

   const getPoems = async () => {
      setError(null)
      try {
         const response = await fetch("ghazal.json")
         if (!response.ok) {
            throw new Error("Network response was not ok.")
         }
         const data: IPoems[] = await response.json()
         const randomIndex = Math.floor(Math.random() * data.length)
         setPoem(data[randomIndex])
         setPoemNumber(randomIndex + 1)
         setShowDescription(false)
      } catch (e) {
         console.error("Failed to fetch poem:", e)
         setError(
            "Could not load a poem. Please check your network connection and try again."
         )
         setPoem(null)
         setPoemNumber(0)
      }
   }

   return (
      <>
         {!isInitialState && (
            <header>
               <h3>غزل شماره: {poemNumber}</h3>
            </header>
         )}
         <div className="container">
            {error ? (
               <div className="poem">
                  <p style={{ color: "red", direction: "ltr" }}>{error}</p>
               </div>
            ) : isShowingDesc ? (
               <div
                  className="poem"
                  style={{
                     opacity: isShowingDesc ? 1 : 0,
                  }}
               >
                  {poem?.explanation}
               </div>
            ) : (
               <div
                  className="poem"
                  style={{
                     opacity: isShowingDesc ? 0 : 1,
                  }}
               >
                  {poem?.poem.split("\n").map((line, index) => {
                     const parts = line.split("\t")
                     if (line.trim() === "") return null

                     return (
                        <div key={index} className="beit">
                           <p className="mesra">
                              {parts[0].split(" ").map((char, charIndex) => (
                                 <span key={charIndex} className="char">
                                    {char}
                                 </span>
                              ))}
                           </p>
                           <p className="mesra">
                              {parts[1].split(" ").map((char, charIndex) => (
                                 <span key={charIndex} className="char">
                                    {char}
                                 </span>
                              ))}
                           </p>
                        </div>
                     )
                  })}
               </div>
            )}
         </div>
         <footer>
            {isInitialState ? (
               <button onClick={getPoems}>یه فال بگیر برامون</button>
            ) : (
               <>
                  <button onClick={() => setShowDescription((prev) => !prev)}>
                     {isShowingDesc ? "شعر" : "تفسیر"}
                  </button>
                  <button onClick={getPoems}>دوباره فال بگیر</button>
               </>
            )}
         </footer>
      </>
   )
}

export default App
