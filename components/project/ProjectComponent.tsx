import {SingleWrapper } from "./SingleProject";

export default function ProjectComponent() {
  const skill = [["scikit-learn", "python", "pandas", "Linear Regression"],["scikit-learn", "python", "pandas", "Logistic Regression"]]
  const detail = [`Diamond price predictor is an machine learning solution to predict the price of a diamond with many attributes such as carat, cut, color, depth and etc of the diamond`,`Diamond price predictor is an machine learning solution to predict the price of a diamond with many
  attributes such as carat, cut, color, depth and etc of the diamond`,`Bank Customer Churn Predictor: Employed logistic regression to build a predictive model for identifying potential customer churn within a banking institution. Leveraged historical transactional data and customer demographics to accurately predict the likelihood of customer attrition. This project aimed to provide actionable insights to the bank for implementing targeted retention strategies and reducing customer churn rates."`,`"machine learning solution to predict the price of a diamond with many attributes"`]
  const link = ["https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/","https://bankchurn-vwnpybuybbccurywa2govy.streamlit.app/","https://chatbotlangchain-yrpotttvt7ghgqftqnqix4.streamlit.app/voice"]
  const img = ["/assets/project/diamond.jpg","/assets/project/bank.jpg","/assets/project/bank.jpg"]

  return (
    <SingleWrapper detail={detail} skill={skill} links={link} img={img}  />
  )
}