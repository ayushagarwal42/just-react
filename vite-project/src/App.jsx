// import './App.css'
import ProductTab from './ProductTab'
import HelloMessage from './HelloMessage'
import CardTab from './CardTab'

export default function App() {
  return (
    <>
      <HelloMessage userName="Ayush" textColor="green" />
      <HelloMessage userName="Abhi" textColor="red" />
      <ProductTab />
      <hr />
      <CardTab/>
    </>
  )
}
