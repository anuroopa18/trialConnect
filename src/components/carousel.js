import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100"
                         src="https://line25.com/wp-content/uploads/2016/03/Medic.jpg"
                         alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100"
                         src="https://thumb1.shutterstock.com/display_pic_with_logo/4215931/463312103/stock-vector-lettering-flat-line-design-concepts-of-medical-thin-line-flat-design-banners-for-website-web-banner-463312103.jpg"
                         alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100"
                         src="https://www.motocms.com/blog/wp-content/uploads/2014/02/colors.png"
                         alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
};

export default Carousel