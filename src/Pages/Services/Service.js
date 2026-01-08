import React from "react";
import './Service.css'
import image from './image.jpg'
import cloud from './cloud.jpg'
import customer from './customer.jpg'
import cyber from './cyber.jpg'
import enterprice from './enterprice.webp'
import industries from './industries.jpg'
import ai from './ai.jpg'
const Service = () => {

    const ServiceArra = [
        {
            title: "Cloud",
            description: "A short description about this place goes here.",
            imgSrc: cloud, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        },
        {
            title: "Customer First",
            description: "A short description about this place goes here.",
            imgSrc: customer, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        },
        {
            title: "Cyber Security",
            description: "A short description about this place goes here.",
            imgSrc: cyber, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        },
        {
            title: "Enterprise Management",
            description: "A short description about this place goes here.",
            imgSrc: enterprice, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        }, {
            title: "Industries",
            description: "A short description about this place goes here.",
            imgSrc:industries, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        }, {
            title: "Data and AI",
            description: "A short description about this place goes here.",
            imgSrc:ai, // keep image in public/ or pass a full URL
            alt: "Scenic view"
        }, 
    ]

    return (



        <div className="page">
            {/* Fixed wallpaper layer (static) */}
            <div className="wallpaper" aria-hidden="true" />

            {/* First section: transparent/sem-transparent over wallpaper */}
            <section className="section section--transparent">
                <div className="container">
                    <h1>A constantly evolving portfolio to meet the ever-changing needs of our clients.</h1>
                </div>
            </section>

            {/* Next section: full overlap (opaque background) */}
            <section className="section section--opaque">
                <div className="container">
                    <h1>Explore Our Services</h1>

                </div>
                <div className="card-container">
                    {
                        ServiceArra?.map((data) => {
                            return (

                                <div className="card" tabIndex={0} aria-label={`${data?.title} card`}>
                                    <div className="card__image-wrap">
                                        <img className="card__image" src={data?.imgSrc} alt={data?.alt} />
                                        <div className="card__overlay">
                                            <h3 className="card__title">{data?.title}</h3>
                                            <p className="card__desc">{data?.description}</p>
                                            <button className="card__action" type="button">Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>


    )
}
export default Service