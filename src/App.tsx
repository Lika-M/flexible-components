import Input from './components/Input.tsx'
import './App.css'

function App() {

  return (
    <main>
      <>
      {/* different types with different props */}
        <Input label='Your name' id='name' type='text' />
        <Input label='Yor age' id='age' type='number' />
        <Input label='Button' id='button' type='submit' disabled />
      </>
    </main>
  )
}

export default App
