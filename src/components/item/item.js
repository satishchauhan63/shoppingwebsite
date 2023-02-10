import { Link } from "react-router-dom"

const Item = ({ data, addToCart }) => {

    const { id, image, title, price } = data

    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="title">
                    <Link to={`/product/${id}`} className="link titleLink">
                        {title}
                    </Link>
                </div>
                <div className="flex">
                    <span className="price" style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div  onClick={addToCart}>
                    <i class="fa fa-cart-plus" style={{fontSize : "20px"}}>AddCart</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Item }