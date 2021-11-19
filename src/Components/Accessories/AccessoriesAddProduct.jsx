
import React,{useEffect} from 'react'
import axios from 'axios'

function AccessoriesAddProduct() {

    const accessories__main={
        border:"2px solid red",
        width:"100%",
        
        
        
    }
    const accessories__container={

    }

    useEffect(() => {
      var bodyFormData = new FormData();
      bodyFormData.append('agency_name', 'kmaa');
      bodyFormData.append('agency_id_data', '34335');
      bodyFormData.append('gst_no', '433');
      bodyFormData.append('email', 'gma617mddail@gmail.com');
      bodyFormData.append('contact_no', '999999991');
      bodyFormData.append('address', 'Fredghghbj');
      bodyFormData.append('deposited_amount', '8787');
      bodyFormData.append('cylinder_bought_by_agency_id', JSON.stringify([{cylinder_type_id: 1, quantity: 888}]));
      bodyFormData.append('cylinder_selling_price_id', JSON.stringify([{cylinder_type_id: 1, selling_price: 676}]));

      axios({
        method: "post",
        url: "http://45.79.121.178:8000/agency/",
        data: bodyFormData,
        headers: { 
          'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
          'Authorization': `Token ${sessionStorage.getItem('token')}`,
      },
      })
        .then(function (response) {
          console.log("sucess")
          console.log(response);
        })
        .catch(function (response) {
          console.log("error")
          console.log(response);
        });
    }, [])
    return (
        <div style={accessories__main}>
            <div style={accessories__container}>


            </div>
        </div>
    )
}

export default AccessoriesAddProduct
