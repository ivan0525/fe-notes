# Webpack相关

## `loaders`

在webpack中使用`loader`来对模块的源代码进行转换，而`loader`的本质其实就是一个nodejs模块。

### `loader`编写原则

- 单一原则：每个`loader`只做一件事；
- 链式调用：`webpack`会按顺序链式调用每个`loader`；
- 模块化：`loader`生成的模块与普通模块遵循相同的设计原则；
- 无状态：确保 loader 在不同模块转换之间不保存状态。每次运行都应该独立于其他编译模块以及相同模块之前的编译结果；
