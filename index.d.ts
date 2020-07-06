import * as React from 'react';

export interface NestableProps {
  className?: string;
  items?: { id: number; text: string }[];
  threshold?: number;
  maxDepth?: number;
  collapsed?: boolean;
  group?: string | number;
  handler?: Node;
  childrenProp?: string;
  renderItem?: function;
  renderCollapseIcon?: function;
  onChange?: function;
  confirmChange?: function;
}
declare const Nestable: React.FC<NestableProps>;
export default Nestable;
