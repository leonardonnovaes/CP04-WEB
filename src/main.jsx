import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importando as denpendências para criar as rotas
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Contato from './routes/Contato.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'


  const router =createBrowserRouter([{
      path:'/',element:<App/>,
      children:[
        {path:'/',element:<Home/>},
        {path:'/Contato',element:<Contato/>},
        {path:'/Produtos',element:<Produtos/>},
        {path:'/Sobre',element:<Sobre/>},
      ]
  }])

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      {/*CRIANDO O DESESTRUCT ROUTER PARA SER RENDERIZADO */}
      <RouterProvider router={router} />
    </StrictMode>,

)
