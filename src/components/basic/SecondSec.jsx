import Second1 from "../../assets/second/1.png"
import Second2 from "../../assets/second/2.png"
import Second3 from "../../assets/second/3.png"
import Second4 from "../../assets/second/4.png"
import Second5 from "../../assets/second/5.png"

export default function SecondSec() {
  return (
    <div className="w-full flex justify-center md:gap-20 gap-8 flex-wrap items-center md:p-12 my-4 px-2">
        <img src={Second1} alt="" />
        <img src={Second2} alt="" />
        <img src={Second3} alt="" />
        <img src={Second4} alt="" />
        <img src={Second5} alt="" />
    </div>
  )
}
