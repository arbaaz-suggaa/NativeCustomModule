import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { my-custom-expo-moduleViewProps } from './my-custom-expo-module.types';

const NativeView: React.ComponentType<my-custom-expo-moduleViewProps> =
  requireNativeViewManager('my-custom-expo-module');

export default function my-custom-expo-moduleView(props: my-custom-expo-moduleViewProps) {
  return <NativeView {...props} />;
}
