import React, { useState,useEffect } from 'react'
import '../SettingCss/Big4Container.css'

function Big4Container(props) {
    const [divColor, setDivColor] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                title: "Get Help"
            },
            {
                id: 2,
                title: "Manage agency/company"
            },
            {
                id: 3,
                title: "Manage driver"
            },
            {
                id: 4,
                title: "Set gas price"
            },
            {
                id: 5,
                title: "Cost of empty cylinder"
            },
            {
                id: 6,
                title: "Change password"
            },
        ]
    })
    // console.log(divColor.objects[1]) 

    useEffect(() => {
        setDivColor({ ...divColor, activeObject: divColor.objects[0] })
    }, [])
    
    const togalActive = (index) => {
        setDivColor({ ...divColor, activeObject: divColor.objects[index] })
        props.setshowcontainer(index)
    }

    const togalActiveStyle = (index) => {
        if (divColor.objects[index] === divColor.activeObject) {
            return "Big4_container_box afteractive"
        } else {
            return "Big4_container_box inactive"
        }
    }
    return (
        <div className="big_4container__main">
            {
                divColor.objects.map((element, index) => (
                    <div key={index}>
                       
                        <div key={index} className={togalActiveStyle(index) } onClick={() =>{ togalActive(index)}}>
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
