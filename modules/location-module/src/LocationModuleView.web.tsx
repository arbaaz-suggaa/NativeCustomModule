import * as React from 'react';

import { LocationModuleViewProps } from './LocationModule.types';

export default function LocationModuleView(props: LocationModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
