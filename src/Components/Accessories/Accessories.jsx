import React,{useEffect,useState} from 'react'
import axios from 'axios'
import LeftSidebar from '../Sidebar/LeftSidebar'
import './Accessories.css'
import AccessoriesHeader from './AccessoriesHeader'
import Accessories_4Small_container from './Accessories_4Small_container'
import { getEccessoriesAPI } from '../../Utils/utils'
import AccessoriesAddProduct from './AccessoriesAddProduct'

function Accessories() {
    const [getEccessArray, setGetEccessArray] = useState([])
    const [addProduct, setAddProduct] = useState(false)
    useEffect(() => {

        const accessoriesGet = async () => {
            const config = {
                url: getEccessoriesAPI,
                method: 'GET',
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem('token')}`,
                },

            }
            await axios(config)
                .then((res) => {
                    const accessData = res.data.map((ele, idx) => ({
                        proname: ele.product_name,
                        quantity:ele.quantity,
                        price:ele.price,
                        image:ele.product_image
                    }))
                    setGetEccessArray(accessData)
                })
                .catch((err) => { console.log(err) })
        }
        accessoriesGet()

    }, [])

    return (
        <div className="accessories__main">
            <LeftSidebar />
            <div className="accessories__container">
                <div className="accessories_main_container">
                    <AccessoriesHeader setAddProduct={setAddProduct}/>
                    <hr style={{ color: "#f5f5f5" }} />
                    <div className="accessories_all_container">
                    {addProduct?<AccessoriesAddProduct/>:""}
                        {
                            getEccessArray.map((ele,idx)=>(
                                <Accessories_4Small_container key={idx} proname={ele.proname} quantity={ele.quantity} image={ele.image} price={ele.price}/> 
                            ))
                        }
                        <Accessories_4Small_container /> 
                        <Accessories_4Small_container /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessories
