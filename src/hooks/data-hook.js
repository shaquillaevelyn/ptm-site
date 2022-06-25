import React, { useEffect, useState} from 'react';


export default function DataHook () {
    const [data, setData] = useState([]);
    const getData = () => {
      fetch('../../public/data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(() => {
      getData()
    },[])
    
    

}
