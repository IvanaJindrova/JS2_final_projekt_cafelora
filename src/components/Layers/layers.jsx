import './layers.css';
/*
export const Layers = (color, label) => {
    return (
        <>
            <div className="layer">
                <div className="layer__color" style={{ backgroundColor: color }}></div>
                <div className="layer__label">{label}</div>
            </div>
        </>
    )
}


const dataLayer = {
    color: "#feeeca",
    label: "mléčná pěna",
  }
*/

export const Layers = ({color, label}) => {
    return (
        <>
            <div className="layer">
                <div className="layer__color" style={{ backgroundColor: color }}></div>
                <div className="layer__label">{label}</div>
            </div>
        </>
    )
}