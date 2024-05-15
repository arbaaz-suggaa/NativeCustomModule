// import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// // Import the native module. On web, it will be resolved to LocationModule.web.ts
// // and on native platforms to LocationModule.ts
// ////import LocationModule from './src/LocationModule';
// import LocationModuleView from './src/LocationModuleView';
// import { ChangeEventPayload, LocationModuleViewProps } from './src/LocationModule.types';

// //const emitter= new EventEmitter(LocationModule);

// export type ThemeChange={
//   theme:Theme;
// }
// export type Theme = 'light' | 'dark' | 'system';
// export function OnchangeThemeListener(listener: (event: ThemeChange) => void):Subscription{

//   //return emitter.addListener<ThemeChange>('onChangeTheme', listener);
// }
// // Get the native constant value.
// //export const PI = LocationModule.PI;

// //export function hello(): string {return LocationModule.hello();
// }
// export function getTheme():Theme{
//   return LocationModule.getTheme();
// }
// export function setTheme(theme: Theme): void {
//   return LocationModule.setTheme(theme);
// }

// export async function setValueAsync(value: string) {
//   return await LocationModule.setValueAsync(value);
// }

// export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
//   return emitter.addListener<ChangeEventPayload>('onChange', listener);
// }

// export { LocationModuleView, LocationModuleViewProps, ChangeEventPayload };
