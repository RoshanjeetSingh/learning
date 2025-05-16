import React,{useState} from 'react'
function FavCar(){
    const [car,setcar] = useState({
                                    year:2025,
                                    brand:"bmw",
                                    model:"530d"

                                    })
                    function HandelChangeYear(event){
                        setcar(car =>({...car , year :event.target.value }))
                    }

                    function HandelChangeBrand(event){
                        setcar(car =>({...car , brand :event.target.value }))
                    }
                    function HandelChangeModel(event){
                        setcar(car =>({...car , model :event.target.value }))
                    }


    return(<div>
    <h1>your car detail is here <br/>
    manufactring year : {car.year}  <br />
    brand :{car.brand} <br />
    model :{car.model} <br />
    </h1>
    <hr />
    <div>
        
        <input type="number" onChange={HandelChangeYear}/><br />
        <input type="text"   onChange={HandelChangeBrand}/><br />
        <input type="text"   onChange={HandelChangeModel}/>
    </div>    
    
    </div>
    )
}
export default FavCar