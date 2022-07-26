import './css/VendorItem.css'

export const VendorItem = ({ menu, addCart}) => {  

  return (
      <div className="menu-item">
        <img src={menu.image} className='' alt="..." />
        <div className="menu-price">
            <span className="">{menu.title}</span>
            <span id="price">#{menu.cost}</span>
        </div>
        <button id="cart-btn" onClick={() => addCart(menu)}>Add to Cart</button>
    </div>
  )
}