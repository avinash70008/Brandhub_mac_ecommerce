
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import { singleDatas } from "../../Redux/Shirt/action"

export const TshirtDetails = () => {
    const dispatch  = useDispatch()
    
 const arr  = useSelector((store)=> store.tshirt.singless)
 console.log("arr", arr)
    const {id} = useParams()
    const navigate = useNavigate();
    const [data ,setData] = useState([])
    
    useEffect(()=>{getData()},[id])

    var TshirtData = useSelector((store)=> store.tshirt.tshirt)
    console.log(TshirtData)
    
     const getData = ()=>{
         console.log(id)
        let updatedData = TshirtData.filter((el)=>el._id==id )
        setData(updatedData)
     }
    console.log(data)

    // let arr = JSON.parse(localStorage.getItem("cartData")) || [];

    function AddToCart(el){
        console.log("el",el)
         alert("Product is Added to cart")

        // arr.push(el);
 dispatch(singleDatas(el))


        // localStorage.setItem("cartData",JSON.stringify(arr));
        
    }
    

    return(

       <>    
            <div className="detailsPage">
            {data.map((el)=>(
                <div key={el.id} className="leftPart">
                    <img src={el.imgUrl} alt="" height="100%" width="100%" />
                </div>

            ))}
            {data.map((el)=>(
                <div key={el.id} className="rightPart">
                    <h1 id="price"> Rs . {el.price}</h1>
                    <h3> Color - {el.colour}</h3>
                   
                    <h3> Size - {el.size}</h3>

                    <button onClick={()=>AddToCart(el)} id="cartButton">ADD TO CART</button>
                </div>
                
            ))}
            </div>
            

       </>
    )
}