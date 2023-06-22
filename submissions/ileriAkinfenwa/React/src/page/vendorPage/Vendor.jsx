import "./vendor.css"
import KFC from "../../assets/KFC logo.svg"

const Vendor = ({product, addToCart}) => {
  return (
    <div className='vendorContainer'>
        <div class="breadcremb">
            <span>Home &gt; <strong>Vendors</strong></span>
        </div>
        <div class="hero">
            <h2>All Vendors</h2>
        </div>
        <div class="kfc">
            <div class="kfcs">
                <img src={KFC} alt="img"/>
                <span>KFC</span>
            </div>
            <div class="view-all">
                <span>View all</span>
            </div>
        </div>
        <div className='items'>
            {
                product.map((productItem,productIndex)=>{
                    return(
                        <div class="item">
                            <div class="card-img">
                            <img className='productsimg' src={require("../../assets/" + productItem.pictures + `.svg`).default} alt="productImage" />
                            </div>
                            <div class="card">
                                <div class="description">
                                    <span>Chicken strips</span>
                                    <div class="price">{productItem.price}</div>
                                </div>
                                <div class="card-btn"><button onClick={() => addToCart(productItem)}>Add to Cart</button></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <hr/>
            <div class="chicken-republic">
                <div class="chicken-header">
                    <div class="img">
                        <img src="Chicken republic_logo.svg" alt="" />
                    </div>
                    <div class="header">
                        <h3>Chicken Republic</h3>
                        <div className='items'>
            {
                product.map((productItem,productIndex)=>{
                    return(
                        <div class="item">
                            <div class="card-img">
                            <img className='productsimg' src={require("../../assets/" + productItem.pictures + `.svg`).default} alt="productImage" />
                            </div>
                            <div class="card">
                                <div class="description">
                                    <span>Chicken strips</span>
                                    <div class="price">{productItem.price}</div>
                                </div>
                                <div class="card-btn"><button onClick={() => addToCart(productItem)}>Add to Cart</button></div>
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