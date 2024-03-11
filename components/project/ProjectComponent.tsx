import {SingleWrapper } from "./SingleProject";

export default function ProjectComponent() {
  const skill = [["scikit-learn", "python", "pandas", "Linear Regression"],["scikit-learn", "python", "pandas", "Linear Regression"]]
  const detail = [`Diamond price predictor is an machine learning solution to predict the price of a diamond with many attributes such as carat, cut, color, depth and etc of the diamond`,`Diamond price predictor is an machine learning solution to predict the price of a diamond with many
  attributes such as carat, cut, color, depth and etc of the diamond`]
  const link = ["https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/","https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/"]
  const img = ["/assets/project/diamond.jpg","/assets/project/diamond.jpg"]

  return (
    <SingleWrapper detail={detail} skill={skill} links={link} img={img}  />
  )
}