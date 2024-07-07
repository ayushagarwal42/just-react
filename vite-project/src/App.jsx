// import './App.css'
import ProductTab from './ProductTab'
import HelloMessage from './HelloMessage'
import CardTab from './CardTab'
import Button from './Button'
import Form from './Form'

export default function App() {
  return (
    <>
    <Form/>
      <Button />
      <HelloMessage userName="Ayush" textColor="green" />
      <HelloMessage userName="Abhi" textColor="red" />
      <ProductTab />
      <hr />
      <CardTab />
    </>
  )
}
