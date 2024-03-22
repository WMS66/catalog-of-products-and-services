// serviceItem.js
import React from 'react'

const ServiceItem = ({ service }) => {
    return (
        <li>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Preço: R$ {service.price}</p>
        </li>
    )
}

export default ServiceItem
