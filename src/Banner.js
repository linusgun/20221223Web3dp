import backimage from './img/DMP Printer 3d-systems-healthcare-dmp-printer-fleet.jpg';
import threedspartner from './img/3ds-partner-logo-dark-us-2016-10-20.png';

function Banner() {

    return (

        <div>
            <img src={backimage} />
            <div>
                <img src={threedspartner} />
                <h4>Lidera tu industria</h4>
                <p>Adopta la Manufactura Aditiva (AM, por sus siglas en ingles) y genera una ventaja competitiva</p>
            </div>
        </div>


    )

}

export default Banner;