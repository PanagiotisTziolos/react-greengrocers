export default function Grocery({ imageName }) {
    const imagePath = `${process.env.PUBLIC_URL}/assets/icons/${imageName}.svg`

    return (
        <div className="store--item-icon">
            <img src={imagePath} alt={imageName} />
        </div>
    )
}