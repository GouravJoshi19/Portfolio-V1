import { SingleWrapper } from "./SingleProject";

export default function ProjectComponent() {
  const skill = [["scikit-learn", "python", "pandas", "Linear Regression"], ["scikit-learn", "python", "pandas", "Linear Regression"],["LLM", "Langchain", "Streamlit", "Python"],["Deep Learning","CNN","Transfer Learning","Resnet","Streamlit"],["LLM","Cohere","Langchain","Streamlit","Pinecone","Pandas"]]
  const detail = [`Diamond price predictor is an machine learning solution to predict the price of a diamond with many attributes such as carat, cut, color, depth and etc of the diamond.`, `Bank Customer Churn Predictor,a logistic regression model to forecast customer churn in a banking setting and analyzed transactional data to predict customer churn.`,`This chatbot is a dynamic AI solution built using Cohere, Streamlit, LangChain, and Python. It combines Cohere's advanced natural language processing capabilities with LangChain's robust AI framework for managing complex interactions and workflows. The Streamlit integration provides an interactive, web-based interface, making the chatbot accessible, efficient, and easy to use for a variety of tasks and queries.`,`The Deep Fake Image Classifier is a web application built with Streamlit that harnesses the power of advanced machine learning techniques to distinguish between authentic and deep fake images. Leveraging state-of-the-art models such as MTCNN for face detection and ResNet50 for image classification, this application offers users a robust toolset to combat the proliferation of manipulated visual content.`,`Document AI is a powerful Retrieval-Augmented Generation (RAG) model built using Cohere's LLM for natural language understanding. It processes text, PDF, and CSV files, enabling users to ask questions about the uploaded documents and receive precise, context-aware answers. The model's seamless integration with Streamlit ensures an intuitive and user-friendly interface for quick and efficient interactions`]
  const link = ["https://diamond-price-predicter-yehkkgbsuknpjdi5yewp8c.streamlit.app/", "https://bankchurn-vwnpybuybbccurywa2govy.streamlit.app/","https://chatbotlangchain-yrpotttvt7ghgqftqnqix4.streamlit.app/voice","https://github.com/GouravJoshi19/Deepfake.git","https://github.com/GouravJoshi19/Document-AI.git"]
  const img = ["/assets/project/diamond.jpg", "/assets/project/bank.jpg","/assets/project/chat_bot.jpg","/assets/project/deepfake.jpg","/assets/project/rag.webp"]

  return (
    <SingleWrapper detail={detail} skill={skill} links={link} img={img} />
  )
}