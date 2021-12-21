import React, { useState ,useEffect} from 'react'
import './BigFilledCylinder.css'


function Big4Container(props) {

    const [divColor, setDivColor] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                title: "Domestic 15kg"
            },
            {
                id: 2,
                title: "Commercial 21kg"
            },
            {
                id: 3,
                title: "Commercial/VOT/LOT 33kg"
            },
            {
                id: 4,
                title: "Commercial/LOT 45kg"
            },
            
        ]
    })

    // useEffect(() => {
    //     const config = {
    //         url: getTypeofCylinderAPI,
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Token ${sessionStorage.getItem('token')}`,
    //         },
    //     }
    //     await axios(config)
    //         .then((res) => {
    //             console.log(res.data)
    //         }).catch((err) => alert("Something is wrong...Your Email should be unique"))
      
    // }, [])

    const togalActive = (index) => {
        setDivColor({ ...divColor, activeObject: divColor.objects[index] })
        props.setShowFilledcontainer(index)
    }

    const togalActiveStyle = (index) => {
        if (divColor.objects[index] === divColor.activeObject) {
            return "Big4_filled_container_box afteractive"
        } else {
            return "Big4_filled_container_box inactive"
        }
    }
    return (
        <div className="big_filled_cylinder__main">
            {
                divColor.objects.map((element, index) => (
                    <div key={index}>
                        <div key={index} className={togalActiveStyle(index)} onClick={() => togalActive(index)}>
                            {element.title}
                        </div>
                        <br />
                    </div >

                ))
            }
        </div>
    )
}

export default Big4Container
