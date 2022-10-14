import { Meta, StoryObj} from '@storybook/react';
import {within, userEvent, waitFor} from '@storybook/testing-library';
import { rest } from 'msw';
import { expect } from '@storybook/jest';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {
    children: 'Create account',
  },
  argTypes: {
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso!'
          })) 
        })
      ]
    }
  }
  
} as Meta

export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'gustavosgdev@outlook.com');
    userEvent.type(canvas.getByPlaceholderText('******'), 'a102030');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado')).toBeInTheDocument();  
    })

    
  }
}