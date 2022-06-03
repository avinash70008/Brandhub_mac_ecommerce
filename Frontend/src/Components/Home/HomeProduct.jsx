import { Div, FlexDiv } from "./FlexBox"
import {useNavigate} from "react-router"

export const HomeProduct = () => {

    const navigate = useNavigate()

    return(
        <div >
            <FlexDiv className="FlexDiv">
                <Div> <button className="boxes" onClick={  ()=> navigate("/tshirt")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_O3jLWRn5GGkjOKnCUQTfdI8dyWAGccg4dQ&usqp=CAU" alt="tshirt" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/shirt")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyuzmncLIhKLzagGbIbxMZYR9fdUYN74_vA&usqp=CAU" alt="shirt" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/tshirt")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0vVj_VgQWckJUxVacgdRdy11R7ErTf2LAQ&usqp=CAU" alt="tevis" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/shirt")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSLjotyJKA82_WBXHZvn_LmVX5oOgaBfXsA&usqp=CAU" alt="shirt" /> </button></Div>
                
                
            </FlexDiv>

         
        </div>
    ) 
}