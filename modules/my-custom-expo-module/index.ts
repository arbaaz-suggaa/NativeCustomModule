import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to my-custom-expo-module.web.ts
// and on native platforms to my-custom-expo-module.ts
import my-custom-expo-moduleModule from './src/my-custom-expo-moduleModule';
import my-custom-expo-moduleView from './src/my-custom-expo-moduleView';
import { ChangeEventPayload, my-custom-expo-moduleViewProps } from './src/my-custom-expo-module.types';

// Get the native constant value.
export const PI = my-custom-expo-moduleModule.PI;

export function hello(): string {
  return my-custom-expo-moduleModule.hello();
}

export async function setValueAsync(value: string) {
  return await my-custom-expo-moduleModule.setValueAsync(value);
}

const emitter = new EventEmitter(my-custom-expo-moduleModule ?? NativeModulesProxy.my-custom-expo-module);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { my-custom-expo-moduleView, my-custom-expo-moduleViewProps, ChangeEventPayload };
