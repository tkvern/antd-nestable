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

| Prop        | Type                 | Default        | Description                                                 |
| ----------- | -------------------- | -------------- | ----------------------------------------------------------- |
| aspect      | `number`             | `1 / 1`        | Aspect of crop area , `width / height`                      |
| shape       | `string`             | `'rect'`       | Shape of crop area, `'rect'` or `'round'`                   |
| grid        | `boolean`            | `false`        | Show grid of crop area (third-lines)                        |
| zoom        | `boolean`            | `true`         | Enable zoom for image                                       |
| rotate      | `boolean`            | `false`        | Enable rotate for image                                     |
| beforeCrop  | `function`           | -              | Called before modal open, if return `false`, it'll not open |
| modalTitle  | `string`             | `'Edit image'` | Title of modal                                              |
| modalWidth  | `number` \| `string` | `520`          | Width of modal in pixels or percentages                     |
| modalOk     | `string`             | `'OK'`         | Text of confirm button of modal                             |
| modalCancel | `string`             | `'Cancel'`     | Text of cancel button of modal                              |

## Styles

To prevent overwriting the custom styles to `antd`, `antd-nestable` does not import the style files of components.