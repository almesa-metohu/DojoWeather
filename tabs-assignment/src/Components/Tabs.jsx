import React from "react";

const Tabs = (props) => {

    const {setContent} = props;
    
    const objArray = [
        {
            label: 'tab1',
            content: 'Tab1 is here'
        },
        {
            label: 'tab2',
            content: 'Tab2 is here'
        },
        {
            label: 'tab3',
            content: 'Tab3 is here'
        }
    ]

    const ClickButton =(e) => {
        setContent(objArray[e.target.id].content)
    } 


    return (

        <div>
            {
                objArray ? objArray.map((item, index) =>
                (
                    <button
                    key={index} onClick={ClickButton} id={index}>
                        {item.label}
                    </button>
                )):""
            }
        </div>
    )
}


export default Tabs;