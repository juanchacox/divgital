import egecol_divgital from "../assets/img/egecol_divgital.png";
import biomedical_divgital from "../assets/img/biomedical_divgital.png";
import ATA_divgital from "../assets/img/ATA_divgital.png";
import mascoprint from "../assets/img/mascoprint.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Marcas</h2>
                        <p>Empresas que confían en nosotros</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={egecol_divgital} alt="Imagen" />
                            </div>
                            <div className="item">
                                <img src={biomedical_divgital} alt="Imagen" />
                            </div>
                            <div className="item">
                                <img src={ATA_divgital} alt="Imagen" />
                            </div>
                            <div className="item">
                                <img src={mascoprint} alt="Imagen" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
