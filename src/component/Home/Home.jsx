import  React, { Component } from 'react';
class Home extends Component {
    render() { 
        return (  
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                      <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/1 _R80mDh6w0igRFI_5SiFlg.jpeg')} />
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="alert alert-danger danger" role="alert">
                                     <p className="text-white text-center">A simple success alert—check it out!</p> 
                                </div>
                        </div>
                    </div>
                </div> 
                {/* end slider */}
                <div className="container slide">
                    <div className="row">
                        <div className="col-md-10">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                
                                    <img className="img-fluid d-block w-100" src={require('../../gambar/types-of-ecommerce.jpg')} />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="img-fluid d-block w-100 "  src={require('../../gambar/Types-of-Ecommerce1.jpg')} />
                                
                                    </div>
                                    <div className="carousel-item">
                                    <img className="img-fluid d-block w-100"  src={require('../../gambar/1-11.jpg')} />
                                    
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="containerright">
                        <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/yes.png')} />
 
                        <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/desktop.png')} />
                        </div>
                        </div>
                    </div>
                </div>
 
 
                
 
            </div>
        );
    }
}
 
export default Home;