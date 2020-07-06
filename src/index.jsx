import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactNestable from 'react-nestable';
import 'react-nestable/dist/Nestable/Nestable.css';
import './index.less';

const Nestable = forwardRef((props, ref) => {
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

  return (
    <ReactNestable
      ref={(el) => (ref = el)}
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
});

Nestable.propTypes = {
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

export default Nestable;
