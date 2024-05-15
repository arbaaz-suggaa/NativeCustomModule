import * as React from 'react';

import { my-custom-expo-moduleViewProps } from './my-custom-expo-module.types';

export default function my-custom-expo-moduleView(props: my-custom-expo-moduleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
