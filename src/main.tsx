import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Server } from 'miragejs'

new Server({
  routes(){
    this.get('/metrics',() => {
      return{
        data:[]
      }
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
)
