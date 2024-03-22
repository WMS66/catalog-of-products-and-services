// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import ServiceList from './components/ServiceList'
import NotFound from './components/NotFound'

import './index.css' // Importando o arquivo CSS
import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<ProductListPage />} />
                    <Route path="/services" element={<ServiceListPage />} />
                    <Route element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

const Root = () => {
    return (
        <>
            <div>
                <h1>Bem-vindo ao nosso Catálogo de Produtos e Serviços!</h1>
                <h3>
                    Selecione uma opção no menu abaixo para ver os produtos ou serviços disponíveis.
                </h3>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to={'/products'}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={'/services'}>Serviços</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

const Home = () => {
    return <div></div>
}

const ProductListPage = () => {
    return (
        <div>
            <h1>Catálogo de Produtos</h1>
            <ProductList />
        </div>
    )
}

const ServiceListPage = () => {
    return (
        <div>
            <h1>Catálogo de Serviços</h1>
            <ServiceList />
        </div>
    )
}

export default App
