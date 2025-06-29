"use client";
import { Description, Field, Label, Switch } from '@headlessui/react';
import  { toggleConnectAction } from '@/actions/common/connect-action';
import { ConnectType } from '@/definition/dashboard/common/common-types';
import { useTransition } from 'react';

export default function ConnectToggleInput({isConnected, title, desc, connectType}: {isConnected:boolean, title: string, desc: string, connectType: ConnectType}){

    const [pending, transition] = useTransition();

    const handleCallback = () => {

      transition(async () =>{
        await toggleConnectAction({type: connectType});
      });

    }
    
    return (
          <Field className="flex items-center justify-between">
            <span className="flex grow flex-col">
              <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
                {title}
              </Label>
              <Description as="span" className="text-sm text-gray-500">
                {desc}
              </Description>
            </span>
            <Switch
              disabled={isConnected || pending}
              checked={isConnected}
              onChange={handleCallback}
              className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-brand-600"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5"
              />
            </Switch>
          </Field>             
    );
}