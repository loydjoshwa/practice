import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Review from "./App"
import Fetching from "./31.jsx"


createRoot(document.getElementById('root')).render(
  <>
   <Review />
   <Fetching />
  </>
)
