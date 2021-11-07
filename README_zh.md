# typora-modern-theme
## 安装 - Install

打开 Typora ，点击左上角 文件 > 偏好设置 > 外观，点击左下角的“打开主题文件夹”按钮，会弹出==主题文件夹==的资源管理器。Typora 启动时，会自动导入主题文件夹下的所有样式文件（即``.css`文件），可在导航栏的“主题”下拉框中中切换不同的主题。

在==主题文件夹==下打开命令行，输入`git clone https://github.com/shotgun8767/typora-modern-theme`，项目`clone`完成后，在该文件夹下新增了一个`typora-modern-theme`文件夹。随后可以选择以下两种方式进行安装。==安装后需要重启Typora才能加载主题文件==。重启 Typora 后，就可以在导航栏的“主题”下拉框中切换`modern-light`和`modern-night`两款主题，其中前者是浅色主题，后者是深色主题。

### 已配置 NodeJS 环境

打开终端（terminal），将工作目录切换至`typora-modern-theme`，输入下面的语句，即可完成安装。这种方式还可以用于更新`modern`的主题文件。

~~~bash
npm run install
~~~

### 没有配置 NodeJS 环境

进入`typora-modern-theme`文件夹，再进入`theme`文件夹，将其中的所有内容复制到主题文件夹下。

## 自定义样式 - Customization

修改样式文件中`:root`中的参数来自定义心目中的样式吧。

