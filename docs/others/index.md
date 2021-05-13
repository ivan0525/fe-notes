# React-Native真机调试

1. 使用xcode打开已经存在的项目中的`.xcworkspace`文件；

2. 如图所示，选择你的设备（如果你的电脑与你的移动设备连接了，会在这里显示）

   ![l53kYq.png](https://s2.ax1x.com/2020/01/11/l53kYq.png)

3. 配置代码签名
   如果没有注册[Apple developer account]( https://developer.apple.com/)，就先去注册一个开发者账号，注册好之后，在`project`下选择`targets`中的与你工程名相同的文件如图
   ![l58lDg.png](https://s2.ax1x.com/2020/01/11/l58lDg.png)


   然后前往`singning & capabilities`，在`Team`选项中，选择你的开发者账号或者团队。



   如果遇到这样的提示：[<font color=red>Failed to register bundle identifier.</font>](https://stackoverflow.com/questions/39603667/failed-to-create-provisioning-profile)，可以通过修改`Bundle Identity`来解决：这个选项在`General`标签下面的`Identify`中。

   ![l5GXf1.png](https://s2.ax1x.com/2020/01/11/l5GXf1.png)



4. 编译并运行应用
   点击`xcode`右上角的`Build and run`按钮，或者使用快捷键`Command⌘ + R`来编译运行应用。

   这时需要保持你的设备为解锁状态，否则会运行失败。

   最后还需要让你的设备信任开发者的APP，前往设置>通用>设备管理，来信任开发者。这样就可以在自己的设备上运行开发应用了。
