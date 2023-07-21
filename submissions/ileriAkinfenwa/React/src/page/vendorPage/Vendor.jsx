import "./vendor.css"
import KFC from "../../assets/KFC logo.svg"

const Vendor = ({product, addToCart}) => {
  return (
    <div className='vendorContainer'>
        <div className="breadcremb">
            <span>Home &gt; <strong>Vendors</strong></span>
        </div>
        <div className="hero">
            <h2>All Vendors</h2>
        </div>
        <div className="kfc">
            <div className="kfcs">
                <img src={KFC} alt="img"/>
                <span>KFC</span>
            </div>
            <div className="view-all">
                <span>View all</span>
            </div>
        </div>
        <div className='items'>
            {
                product.map((productItem,productIndex)=>{
                    return(
                        <div className="item">
                            <div className="card-img">
                            <img className='productsimg' src={require("../../assets/" + productItem.pictures + `.svg`).default} alt="productImage" />
                            </div>
                            <div className="card">
                                <div className="description">
                                    <span>Chicken strips</span>
                                    <div className="price">{productItem.price}</div>
                                </div>
                                <div className="card-btn"><button onClick={() => addToCart(productItem)}>Add to Cart</button></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <hr/>
            <div className="chicken-republic">
                <div className="chicken-header">
                    <div className="img">
                        <img src="Chicken republic_logo.svg" alt="" />
                    </div>
                    <div className="header">
                        <h3>Chicken Republic</h3>
                        <div className='items'>
            {
                product.map((productItem,productIndex)=>{
                    return(
                        <div className="item">
                            <div className="card-img">
                            <img className='productsimg' src={require("../../assets/" + productItem.pictures + `.svg`).default} alt="productImage" />
                            </div>
                            <div className="card">
                                <div className="description">
                                    <span>Chicken strips</span>
                                    <div className="price">{productItem.price}</div>
                                </div>
                                <div className="card-btn"><button onClick={() => addToCart(productItem)}>Add to Cart</button></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Vendor