// import './App.css'
import ProductTab from './ProductTab'
import HelloMessage from './HelloMessage'

export default function App() {
  return (
    <>
      <HelloMessage userName="Ayush" textColor="green" />
      <HelloMessage userName="Abhi" textColor="red" />
      <ProductTab />
    </>
  )
}
