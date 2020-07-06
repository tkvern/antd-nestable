# antd-nestable
Drag & drop hierarchical list made as a react component for Ant Design

## Project resource
https://github.com/primetwig/react-nestable

## Install

```sh
yarn add antd-img-crop
```

## Usage

```jsx harmony
import Nestable from 'antd-nestable';
import { Upload } from 'antd';

const items = [
  { id: 0, text: 'Andy' },
  {
    id: 1, text: 'Harry',
    children: [
      { id: 2, text: 'David' }
    ]
  },
  { id: 3, text: 'Lisa' }
];

const renderItem = ({ item }) => item.text;

const Demo = () => (
  <Nestable items={items} renderItem={renderItem} />
);
```

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| className | string | `undefined` | Extra class name which can be passed to a root element. |
| items | array | `[]` | Array of items. Every item must be of shape `{ id: @uniq }`. |
| threshold | int | `30` | Amount of pixels which mouse should move horizontally before increasing/decreasing level (nesting) of current element. |
| maxDepth | int | `10` | Maximum available level of nesting. |
| collapsed | boolean | `false` | Are groups collapsed by default. |
| group | string or int | `random string` | Different group numbers may be passed if you have more than one nestable component on a page and want some extra styles for portal instances. |
| handler | component | | If you pass react component here, you may use it in your render method. |
| childrenProp | string | `"children"` | Optional name of property with children. |
| renderItem | function | `({ item, index }) => item.toString()` | Function for rendering every item. Has a single parameter with keys: `item` - item from your array, `index` - index of the item, `collapseIcon` - icon for items with children (allows you to collapse group), `handler` - component which you have passed via the same property, but covered with some additional events. |
| renderCollapseIcon | function | `({ isCollapsed }) => <DefaultIcon />` | Function for rendering collapse icon. Has a single parameter with keys: `isCollapsed` - boolean, true if this group has children and collapsed. |
| onChange | function | `() => {}` | Callback which has two parameters: `items` - new array after position was changed, `item` - item which has been moved. |
| confirmChange | function | `() => true` | Callback which has two parameters: `dragItem` - item which is being dragged, `destinationParent` - item where dragItem is about to land. Let function return false if this movement should not happen. |

## Styles

To prevent overwriting the custom styles to `antd`, `antd-nestable` does not import the style files of components.