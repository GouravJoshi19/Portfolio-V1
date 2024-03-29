import { SingleWrapper } from "./SingleProject";

export default function ProjectComponent() {
  const skill = [["scikit-learn", "python", "pandas", "Linear Regression"], ["scikit-learn", "python", "pandas", "Linear Regression"]]
  const detail = [`Diamond price predictor is an machine learning solution to predict the price of a diamond with many attributes such as carat, cut, color, depth and etc of the diamond.`, `Bank Customer Churn Predictor,a logistic regression model to forecast customer churn in a banking setting and analyzed transactional data to predict customer churn.`]
  const link = ["https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/", "https://bankchurn-vwnpybuybbccurywa2govy.streamlit.app/"]
  const img = ["/assets/project/diamond.jpg", "/assets/project/bank.jpg"]

  return (
    <SingleWrapper detail={detail} skill={skill} links={link} img={img} />
  )
}