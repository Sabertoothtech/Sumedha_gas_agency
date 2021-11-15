import React,{useState,useEffect} from 'react'
import { getSetGasPriceAPI } from '../../../../Utils/utils'
import './SetGasPrice.css'
import axios  from 'axios'
import Button from '@mui/material/Button';

function SetGasPrice() {
    const [arrayGasName, setArrayGasName] = useState([])
    const [changePrice, setChangePrice] = useState([

    ])

    useEffect(() => {
        const config = {
            url: getSetGasPriceAPI,
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        }
        axios(config)
            .then((res) => {
               
                const gasNameobj = res.data.map((gasname, idx) => ({
                    gasname1: gasname.cylinder_type_id.name ,
                    cgst: gasname.cgst,
                    sgst: gasname.sgst,
                    amount:  gasname.amount
                }))
                setArrayGasName(gasNameobj)
            })
            .catch((err) => console.log(err))

      
    }, [])

    const setGasPrice = () =>{
        const config = {
            url: getSetGasPriceAPI,
            method: 'POST',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },

        }
        axios(config)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err) => {console.log(err)})
        
    }


    return (
        <div className="set_gas_price__main">
            <small>Gas price</small><br /><br />
            <div className="set_gas_price__container">
                <div className="set_gas_price__gasName">
                   
                    {arrayGasName.map((ele)=>(
                        <div className="setgaspriceinput">
                        <label htmlFor="">{ele.gasname1}</label>
                        <input type="text" value={ele.amount} /><br />
                    </div>
                    ))}

                    {/* <div className="setgaspriceinput">
                        <label htmlFor="">Domestic</label>
                        <input type="text" /><br />
                    </div>
                    <div className="setgaspriceinput">
                        <label htmlFor="">Domestic</label>
                        <input type="text" /><br />
                    </div> */}

                </div>

                <div className="set_gas_price__gasName">
                    <label htmlFor="">CGST</label>
                    <div className="setgaspriceCGST">
                        {arrayGasName.map((ele)=>(
                       <><input type="text" value={ele.cgst}/><br /></>
                    ))}
                    
                    </div>
                </div>
                <div className="set_gas_price__gasName">
                    <label htmlFor="">SGST</label>
                    <div className="setgaspriceGST">
                    {arrayGasName.map((ele)=>(
                       <><input type="text" value={ele.sgst} /><br /></>
                    ))}
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="setgasprice__buton">
            <Button variant="contained"   onClick={setGasPrice}>Save Price</Button>
            </div>
        

        </div>
    )
}

export default SetGasPrice
