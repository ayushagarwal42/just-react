// import './App.css'
import ProductTab from './ProductTab'
import HelloMessage from './HelloMessage'
import CardTab from './CardTab'
import Button from './Button'

export default function App() {
  return (
    <>
      <Button />
      <HelloMessage userName="Ayush" textColor="green" />
      <HelloMessage userName="Abhi" textColor="red" />
      <ProductTab />
      <hr />
      <CardTab />
    </>
  )
}
