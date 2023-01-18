import backimage from './img/DMP Printer 3d-systems-healthcare-dmp-printer-fleet.jpg';
import threedspartner from './img/3ds-partner-logo-dark-us-2016-10-20.png';
import BannerCSS from "./Banner.module.css"

function Banner() {

    return (

        <div>
            <div className={BannerCSS.content} >
                {/* <img src={threedspartner} /> */}
                <h3>Lidera tu industria</h3>
                <p>Adopta la Manufactura Aditiva (AM, por sus siglas en ingles) y genera una ventaja competitiva</p>
            </div>
        </div>


    )

}

export default Banner;