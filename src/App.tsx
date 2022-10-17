import { Envelope, Lock } from 'phosphor-react';

import { Text } from './components/Text';
import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Checkbox } from './components/Checkbox';
import { TextInput } from './components/TextInput';

import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col">
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className='mt-4 text-cyan-300'>
          Ignite Lab
        </Heading>
        <Text size="lg" className="mt-2 text-gray-400">
          Acesse a plataforma e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch mt-10 w-full max-w-sm gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size='md' className="font-semibold">Seu email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Digite seu email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size='md' className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button
          type="submit"
          className="mt-4"
          onSubmit={() => {}}
        >
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center mt-8 gap-4">
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline cursor-pointer hover:text-gray-200"
          >
          <a>Esqueci minha senha</a>
        </Text>
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline cursor-pointer hover:text-gray-200"
        >
          <a>Não possui uma conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
};
