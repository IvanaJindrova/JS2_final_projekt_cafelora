import './layers.css';

const dataLayer = {
    color: "#feeeca",
    label: "mléčná pěna",
  }

export const Layers = (color, label) => {
    return (
        <>
            <div className="layer">
                <div className="layer__color" style={{ backgroundColor: dataLayer.color }}></div>
                <div className="layer__label">{dataLayer.label}</div>
            </div>
        </>
    )
}
