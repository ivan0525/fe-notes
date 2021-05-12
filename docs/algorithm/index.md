# 二叉树的遍历

### 树的相关术语
> 一个树结构包含一系列存在父子关系的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或者多个子节点。
- 位于树顶部的节点叫做**根结点**；
- 节点的**深度**：节点的深度取决于它的祖先节点的数量；
- 树的**高度**：取决于所有节点深度的最大值；

### 二叉树
> 二叉树中的节点**最多**只能有**两个子节点**

### 二叉搜索树（BST）
> 是二叉树的一种，只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值；

### 树的遍历
- 前序遍历（根左右）
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = []
    const preorderFn = (node) => {
        if (node !== null) {
            res.push(node.val)
            preorderFn(node.left)
            preorderFn(node.right)
        }
    }
    preorderFn(root)
    return res
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法二：迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    while(stack.length > 0 || root !== null) {
        while(root !== null) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return res;
};
```
- 中序遍历（左根右）
> 常用于在**二叉搜索树**中得到**递增**的有序序列；
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    const inorderFn = (node) => {
        if (node !== null) {
            inorderFn(node.left);
            res.push(node.val);
            inorderFn(node.right);
        }
    }
    inorderFn(root);
    return res;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法二：迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    while (stack.length > 0 || root !== null) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()
        res.push(root.val);
        root = root.right;
    }
    return res;
};
```
- 后序遍历（左右根）
> 用于数学中的后缀表示法，结合栈处理表达式，每遇到一个操作符，就可以从栈中弹出两个元素，计算并将结果返回到栈中；

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法一：递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    const postorder = (node) => {
        if (node !== null) {
            postorder(node.left);
            postorder(node.right);
            res.push(node.val);
        }
    }
    postorder(root);
    return res;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法二：迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let pre = null;
    while(stack.length > 0 || root !== null) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.right === null || root.right === pre) {
            res.push(root.val);
            pre = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }
    return res;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法三：迭代、头插法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let pre = null;
    while(stack.length > 0 || root !== null) {
        if (root !== null) {
            res.unshift(root.val);
            if (root.left !== null) {
                stack.push(root.left);
            }
            root = root.right;
        } else {
            root = stack.pop();
        }
    }
    return res;
};
```

- 层序遍历（广度优先遍历）
> 广度优先搜索是一种广泛运用在树或图这类数据结构中，遍历或搜索的算法。 该算法从一个根节点开始，首先访问节点本身。 然后遍历它的相邻节点，其次遍历它的二级邻节点、三级邻节点，以此类推。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法一：迭代（维护一个队列）
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const queue = []; // 队列
    if (root !== null) {
        queue.push(root);
    }
    while (queue.length > 0) {
        const len = queue.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        res.push(level);
    }
    return res;
};
```
递归实现层序遍历：可以这样看二叉树，按照深度优先的处理顺序

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 方法二：递归
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const dfs = (index, res, node) => {
        if (res.length < index) {
            res.push([]);
        }
        res[index - 1].push(node.val);
        if (node.left !== null) {
            dfs(index + 1, res, node.left);
        }
        if (node.right !== null) {
            dfs(index + 1, res, node.right);
        }
    }
    dfs(1, res, root);
    return res;
};
```
