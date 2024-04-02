import { useRef } from 'react';

import Input from './components/Input.tsx';
// import InputRef from './components/Input.tsx';
import Button from './components/Button.tsx';
import CustomButton from './components/CustomButton.tsx';
import './App.css'
import Container from './components/Container.tsx';
import Form from './components/Form.tsx';

function App() {

  // const inputEl = useRef<HTMLInputElement>(null);

  const customForm = useRef<HTMLFormElement>(null)

  function handleSave (data:unknown){
    const enteredData = data as {name: string, age: number};
    console.log(enteredData);
    customForm.current?.clear();
  }

  return (
    <main>
      <section>

      <>
        {/* different types with different props */}
        <Input label='Your name' id='name' type='text' />
        <Input label='Yor age' id='age' type='number' />
        <Input label='Button' id='button' type='submit' disabled
          className='container button' onClick={() => console.log('CLICKED')}
        />
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
      <>
        {/* doesn't combine with another input elements*/}
        {/* <InputRef id='test' label='Test' ref={inputEl} /> */}
      </>
      <br />
      </section>
      <section>
        <Form onSave={handleSave} ref={customForm}>
          <Input label='Name' id='name' type='text' />
          <Input label='Age' id='age' type='number' />
          <p><Button el='button'>Save</Button></p>
        </Form>
      </section>
    </main>
  )

}

export default App
