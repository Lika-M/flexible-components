import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import CustomButton from './components/CustomButton.tsx';
import './App.css'
import Container from './components/Container.tsx';

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
        <Button el='button' >A Button</Button>
        <Button el='link' href='https://dir.bg' >A Link</Button>
      </>

      <>
        <CustomButton disabled />
        <CustomButton href='https://dir.bg' />
      </>

      <>
        <Container as={Button}
          el='button'
          type="button"
          onClick={() => console.log('CLICKED')}
        >
          Click me!
        </Container>
      </>
    </main>
  )
}

export default App
