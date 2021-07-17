import React from 'react'
import { Card } from '../../components/modules/Cards/Card'
import { Navbar } from '../../components/modules/Navbar/Navbar'
import { Carousel } from '../../components/modules/Slider/Carousel/Carousel'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel/>
            <section className="container mt-5">
                <h2 className="fw-bold">Category</h2>
                <span>What are you currently looking for</span>

                <h2 className="fw-bold">New</h2>
                <span>You've never seen it before!</span>
                <div className="cards d-flex flex-wrap">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
                <h2 className="fw-bold">Popular</h2>
                <span>You've never seen it before!</span>
                <div className="cards d-flex flex-wrap">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </section>
        </div>
    )
}
