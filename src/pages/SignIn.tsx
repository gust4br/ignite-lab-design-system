import axios from 'axios';
import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";

export function SignIn(){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);


  async function handleSignIn(event: FormEvent){
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'Gustavo@gustavo.com.br',
      password: '2212212'
    })

    setIsUserSignedIn(true);
  }

  return(
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center gap-">
        <Logo />
        <Heading className='mt-4' size='lg'>Ignite Lab</Heading>
        <Text className='text-gray-400 mt-1' size="lg">Faça login e comece a usar</Text>
      </header>
      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        { isUserSignedIn &&  <Text>Login Realizado</Text>}
        
        <label htmlFor='email' className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>
        <label htmlFor='password' className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="******"/>
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2 cursor-pointer'>
          <Checkbox id="remember" />
          <Text className="text-gray-200" size='sm'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className="mt-4">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm" className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Esqueceu sua senha</a>
        </Text>
        <Text asChild size="sm" className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Não possue conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}