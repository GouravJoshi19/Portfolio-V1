import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";


export default function ProjectComponent() {
  const arr = ["scikit-learn", "python", "pandas", "Linear Regression"]
  return (
    <div className="w-1/2 mb-5 shadow-2xl rounded-3xl mt-5">
      <div className="relative h-[200px] bg-[url('/assets/project/diamond.jpg')] rounded-t-3xl" />
      <div className="grid grid-cols-3 mt-3 px-1">
        {
          arr.map((data, index) => (
            <Button className="mx-1 my-1" size="sm" key={index} variant="flat" color="primary">{data}</Button>
          ))
        }
      </div>
      <div className="flex flex-col mt-3 ps-3 text-sm font-semibold text-[#767676]">
        <p>
          Diamond price predictor is an machine learning solution to predict the price of a diamond with many
          attributes such as carat, cut, color, depth and etc of the diamond.
        </p>
        <Link className="text-sm font-semibold my-3" showAnchorIcon href="https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/">Read More</Link>
      </div>
    </div>
  )
}