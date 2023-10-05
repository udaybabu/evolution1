import React, { useEffect, useState } from 'react'


const MappingData =(dataList) => {
    const [empDetails, setempDetails] = useState([
        {
          name:'prasad',
          place:'kalikari',
          age:'32'
        },
        {
          name:'kumar',
          place:'piler',
          age:'31'
        },
        {
          name:'hemanth',
          place:'hyderabad',
          age:'29'
        }
      ])
    const nameList = ['rama','lakshmana','prasd','hemanth'];
    empDetails.map((item,index) => <h3 key={index}>{item.name}</h3>)

    return <div>{empDetails}</div>
}

export default MappingData