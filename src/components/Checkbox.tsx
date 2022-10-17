import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 bg-gray-800 rounded p-[2px]">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="text-cyan-300 h-5 w-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
