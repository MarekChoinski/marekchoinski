import React from "react"
import TowerVideo from "../../static/consquare/tower.mp4";

const WizardTower: React.FC = () => {

    return (
        <section className="infoTile infoTile--build">
            <div className="towerVideo">
                <video autoPlay loop muted playsInline width="100%" height="100%">
                    <source src={TowerVideo} type="video/mp4" />
                </video>
            </div>
            <div className="infoTile infoTile--build">w</div>
            <div className="infoTile infoTile--fight">e</div>
            <div className="infoTile infoTile--collect">r</div>
            <div className="infoTile infoTile--explore">t</div>
        </section>

    );
}

export default WizardTower;