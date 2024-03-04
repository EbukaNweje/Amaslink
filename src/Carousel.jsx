import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../src/CaroselMobile.css'
import '../src/Carousel.css'
import { useNavigate } from "react-router-dom";

const Carousel = () => {
    const nav = useNavigate()
    
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dots: true,
        margin: 0,
        nav: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    };




    return (
        <div className="relative">
            <OwlCarousel {...owlOptions} className="w-full " >
                <div className="item CritemBody ">
                <div className="HomeContainerinner">
                        <h1 className="Homeh1Tag">
                        <span style={{ color: "red" }}>Buy</span> Anything
                        From <span style={{ color: "red" }}>AMASLINK</span>
                        </h1>
                        <p className="HomePTag">
                        your premier destination for cutting-edge technology and gadgets!
                        Dive into a world of innovation where you can explore, select, and
                        seamlessly purchase a wide array of gadgets to elevate your
                        lifestyle
                        </p>
                        <button className="HomeButtonTag" onClick={()=>nav('/Signup')}>GET STARTED</button>
                 </div>

                    <div className="bg1"></div>
                </div>
                
                <div className="item CritemBody ">
                <div className="HomeContainerinner">
                        <h1 className="Homeh1Tag">
                        <span style={{ color: "red" }}>Buy</span> Anything
                        From <span style={{ color: "red" }}>AMASLINK</span>
                        </h1>
                        <p className="HomePTag">
                        your premier destination for cutting-edge technology and gadgets!
                        Dive into a world of innovation where you can explore, select, and
                        seamlessly purchase a wide array of gadgets to elevate your
                        lifestyle
                        </p>
                        <button className="HomeButtonTag" onClick={()=> nav('/Signup')}>GET STARTED</button>
                 </div>

                    <div className="bg2"></div>
                </div>
                

                <div className="item CritemBody ">
                <div className="HomeContainerinner">
                        <h1 className="Homeh1Tag">
                        <span style={{ color: "red" }}>Buy</span> Anything
                        From <span style={{ color: "red" }}>AMASLINK</span>
                        </h1>
                        <p className="HomePTag">
                        your premier destination for cutting-edge technology and gadgets!
                        Dive into a world of innovation where you can explore, select, and
                        seamlessly purchase a wide array of gadgets to elevate your
                        lifestyle
                        </p>
                        <button className="HomeButtonTag"onClick={()=>nav('/Signup')}>GET STARTED</button>
                 </div>

                    <div className="bg3"></div>
                </div>
                


                
            </OwlCarousel>
        </div>
    );
};

export default Carousel;
