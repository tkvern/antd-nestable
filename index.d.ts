import * as React from 'react';

interface HandleProps {
  collapse: () => void;
}

export interface NestableProps {
  className?: string;
  items?: { id: number; text: string }[];
  threshold?: number;
  maxDepth?: number;
  collapsed?: boolean;
  group?: string | number;
  handler?: Node;
  childrenProp?: string;
  renderItem?: any;
  renderCollapseIcon?: any;
  onChange?: any;
  confirmChange?: any;
}
declare const Nestable: React.RefForwardingComponent<
  HandleProps,
  NestableProps
>;
export default Nestable;
