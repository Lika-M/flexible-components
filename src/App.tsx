import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
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
      <>
        <Button el='button'/>
        <Button el='link' href='https://dir.bg'/>
      </>
    </main>
  )
}

export default App
