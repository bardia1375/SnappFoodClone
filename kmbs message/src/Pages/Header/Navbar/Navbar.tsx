import react from "react"
import snappfood from "../../../assets/Images/snappfood.svg"
import SearchInput from "../../../Components/SearchInput/SearchInput"
import Button from "../../../Components/Button/Button"
 const Navbar =()=>{
  const submit=()=>{
    console.log("click");
    
  }
    return (
        <div className="">
          <div className="main">
           <div className="leftSide">
            <div className="user">
              <button className="person">ADMK</button>
            </div>
            <div className="order">
              <button className="sefarsh">orde</button>
            </div>
           </div>
           <div className="searchBox">
            <SearchInput />
           </div>
           <div className="rightSide"></div>
           {/* <img src={snappfood}/> */}
            <Button Name={"ثبت"} onClick={submit}/>
          </div>
        </div>
    )
}
export default Navbar