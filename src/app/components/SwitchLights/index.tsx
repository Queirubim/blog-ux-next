'use client';
import { Switch, cn } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

export const SwitchLights = () => {
  const [hasLight, setHasLight] = useState(false);

  useEffect(() => {
    try {
      const element = document.documentElement;
      if (hasLight) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    } catch {
      console.log('');
    }
  }, [hasLight]);

  return (
    <Switch
      classNames={{
        wrapper: cn('bg-white', 'group-data-[selected]:bg-black w-14'),
        thumb: cn(
          'group-data-[selected]:ml-6 ',
          'group-data-[selected]:bg-white',
          'ml-2 bg-black',
        ),
        endContent: cn('text-black text-medium'),
        startContent: cn('text-white text-medium'),
      }}
      defaultSelected
      size="sm"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={() => {
        setHasLight(!hasLight);
      }}
    />
  );
};
