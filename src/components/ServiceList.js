// ServiceList.js
import React from 'react'
import ServiceItem from './ServiceItem'
import servicesData from '../data/services'

console.log(servicesData)

const ServiceList = () => {
    return (
        <div>
            <h2>Serviços</h2>
            <ul>
                {servicesData.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </ul>
        </div>
    )
}

export default ServiceList
