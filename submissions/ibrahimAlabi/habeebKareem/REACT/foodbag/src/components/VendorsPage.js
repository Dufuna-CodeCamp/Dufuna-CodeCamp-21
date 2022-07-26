import { Link } from 'react-router-dom';

import {data} from './Menus';
import {VendorItem} from './VendorItem';
import './css/VendorsPage.css';

function VendorsPage ({addCart}) {

    return (
        <div>
            {/* Breadcrumb */}
            <ul className='breadcrumb'>
                    <li className='breadcrumb-item'><Link to=''>Home</Link></li>
                    <li className='breadcrumb-item'><Link style={{color: "#000000"}} to='/VendorsPage'> Vendors  </Link></li>
                    
                </ul>
            <h3>All Vendors</h3>
            <div class="vendor-name">
                
                <img src="./assets/KFC logo.svg" alt="" />
                
                <span className='span'>KFC</span>
                <a href="/">View all</a>
               
               
            </div>

            <div className='vendor-menu'>
                {data.kfcMenus.map((menu) => {
                    
                    return (            
                        <VendorItem menu={menu} addCart={addCart} />
                    )
                })}

            </div>

            <a id="view-all" href="/">View all</a>

            <hr />

        

            <div class="vendor-name">
                <img src="./assets/Chicken republic_logo.svg" alt="" />
                <span className='span'>Chicken Republic</span>
                <a href="/">View all</a>
            </div>

            <div className='vendor-menu'>
                { data.chrMenus.map((menu) => {
                    return (
                        <VendorItem menu={menu} addCart={addCart}/>
                    )
                }) }
            </div>

            <a id="view-all" href="/">View all</a>
        
        </div>
        
    )
}
export default VendorsPage