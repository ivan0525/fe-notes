import{o as e,c as o,a as t}from"./app.d66b6acb.js";const a='{"title":"React-Native真机调试","description":"","frontmatter":{},"relativePath":"others/index.md","lastUpdated":1620955262443}',r={},c=t('<h1 id="react-native真机调试"><a class="header-anchor" href="#react-native真机调试" aria-hidden="true">#</a> React-Native真机调试</h1><ol><li><p>使用xcode打开已经存在的项目中的<code>.xcworkspace</code>文件；</p></li><li><p>如图所示，选择你的设备（如果你的电脑与你的移动设备连接了，会在这里显示） <img src="https://s2.ax1x.com/2020/01/11/l53kYq.png" alt="l53kYq.png"></p></li><li><p>配置代码签名如果没有注册<a href="https://developer.apple.com/" target="_blank" rel="noopener noreferrer">Apple developer account</a>，就先去注册一个开发者账号，注册好之后，在<code>project</code>下选择<code>targets</code>中的与你工程名相同的文件 <img src="https://s2.ax1x.com/2020/01/11/l58lDg.png" alt="l58lDg.png"> 如图然后前往<code>singning &amp; capabilities</code>，在<code>Team</code>选项中，选择你的开发者账号或者团队。如果遇到这样的提示：<a href="https://stackoverflow.com/questions/39603667/failed-to-create-provisioning-profile" target="_blank" rel="noopener noreferrer"><span style="color:red;">Failed to register bundle identifier.</span></a>，可以通过修改<code>Bundle Identity</code>来解决：这个选项在<code>General</code>标签下面的<code>Identify</code>中。 <img src="https://s2.ax1x.com/2020/01/11/l5GXf1.png" alt="l5GXf1.png"></p></li><li><p>编译并运行应用点击<code>xcode</code>右上角的<code>Build and run</code>按钮，或者使用快捷键<code>Command⌘ + R</code>来编译运行应用。这时需要保持你的设备为解锁状态，否则会运行失败。最后还需要让你的设备信任开发者的APP，前往设置&gt;通用&gt;设备管理，来信任开发者。这样就可以在自己的设备上运行开发应用了。</p></li></ol>',2);r.render=function(t,a,r,d,l,i){return e(),o("div",null,[c])};export default r;export{a as __pageData};
