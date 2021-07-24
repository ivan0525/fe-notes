---
pageClass: custom-page-class
---
# Javascript相关

## 1. 设计模式
### 1.1 发布订阅（观察者模式）

<<< @/js/observer/index.js

## 2. 常用工具函数
### 2.1 防抖函数
> 防抖：让高频执行的动作在单位时间内只会执行一次，也就是说如果该动作在单位时间内再次触发，则重新就算时间。

<<< @/js/debounce.ts

### 2.2 `Object.is` polyfill
> `Object.is` 方法用来判断两个值是否是同一个。（该方法与`===`几乎相同，区别在于前者对`NaN`和`+0`和`-0`进行了特殊处理）。
```js
NaN === NaN // false
-0 === +0 // true
1/+0 === Infinity
1/-0 === -Infinity
Infinity === -Infinity // false
```

<<< @/js/objectIs.js

## 3. 数据处理
### 3.1 扁平数据解构转树状结构
```js
let arr = [
  { id: 1, name: '部门1', parentId: 0 },
  { id: 2, name: '部门2', parentId: 1 },
  { id: 5, name: '部门5', parentId: 4 },
  { id: 4, name: '部门4', parentId: 3 },
  { id: 3, name: '部门3', parentId: 1 },
];
/**
 * 结果
    [{
        "id": 1,
        "name": "部门1",
        "parentId": 0,
        "children": [{
          "id": 2,
          "name": "部门2",
          "parentId": 1,
          "children": []
        }, {
          "id": 3,
          "name": "部门3",
          "parentId": 1,
          "children": [{
            "id": 4,
            "name": "部门4",
            "parentId": 3,
            "children": [{
              "id": 5,
              "name": "部门5",
              "parentId": 4,
              "children": []
            }]
          }]
        }]
      }]
*/

function arrayToTree(arr) {
  const result = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const { id, parentId } = item;
    if (!map[id]) {
      map[id] = {
        children: []
      }
    }
    map[id] = {
      ...item,
      children: map[id].children
    }
    const leaf = map[id];
    // 这里假设初始id为0
    if (parentId === 0) {
      result.push(leaf);
    } else {
      if (!map[parentId]) {
        map[parentId] = {
          children: []
        }
      }
      map[parentId].children.push(leaf);
    }
  }
  return result;
}
console.log(JSON.stringify(arrayToTree(arr)));
```

## 4. 源码解析
### 4.1 React源码解析

<<< @/js/react-source-code.md
