import React, { forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactNestable from 'react-nestable';
import 'react-nestable/dist/Nestable/Nestable.css';
import './index.less';

const Nestable = (props, ref) => {
  const {
    className,
    items,
    threshold,
    maxDepth,
    collapsed,
    group,
    handler,
    childrenProp,
    renderItem,
    renderCollapseIcon,
    onChange,
    confirmChange,
  } = props;

  let { domRef } = props;

  console.log(domRef);

  return (
    <ReactNestable
      ref={(el) => (domRef = el)}
      className={className}
      items={items}
      threshold={threshold}
      maxDepth={maxDepth}
      collapsed={collapsed}
      group={group}
      handler={handler}
      childrenProp={childrenProp}
      renderItem={renderItem}
      renderCollapseIcon={renderCollapseIcon}
      onChange={onChange}
      confirmChange={confirmChange}
    />
  );
};

Nestable.propTypes = {
  domRef: PropTypes.any,
  className: PropTypes.string,
  items: PropTypes.array,
  threshold: PropTypes.number,
  maxDepth: PropTypes.number,
  collapsed: PropTypes.bool,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handler: PropTypes.node,
  childrenProp: PropTypes.string,
  renderItem: PropTypes.func,
  renderCollapseIcon: PropTypes.func,
  onChange: PropTypes.func,
  confirmChange: PropTypes.func,
};

Nestable.defaultProps = {
  items: [],
  threshold: 30,
  maxDepth: 10,
  collapsed: false,
  childrenProp: 'children',
  renderItem: ({ item, index }) => item.toString(),
};

export default forwardRef(Nestable);
