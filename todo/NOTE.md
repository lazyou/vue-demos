## Step1
* install nodejs, set npm registry

* vue-cli:
    * npm install -g vue-cli
    * vue init <template-name> <project-name>

* run:
    * npm install
    * npm run dev


## Step2: 项目分析
* 需求分析 -> 数据模拟 -> api分析 -> 组件分析


## Step3: 布局与组件
* 项目结构
    ```
    ├── build              // 构建服务和webpack配置
    ├── config             // 项目不同环境的配置
    ├── dist               // 项目build目录
    ├── index.html         // 项目入口文件
    ├── package.json       // 项目配置文件
    ├── src                // 生产目录
    │   ├── assets         // 图片资源
    │   ├── common *          // 公共的css js 资源
    │   ├── components     // 各种组件 
    │   ├── moke *           // 本地静态数据管理文件
    │   ├── App.vue         // 主页面
    │   ├── vuex *           // vuex状态管理器
    │   ├── router    // 路由配置器
    │   └── main.js        // Webpack 预编译入口
    ```

* Style:
    * npm install --save-dev less-loader style-loader less
    *  /build/webpack.base.conf.js 配置 less ...

* vue-router:
    * 将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们

* 组件:
    * 使用组件
    * 局部注册组件: import, components
    * 组件间通信:
        * 父子组件通信之 Prop: 例如 父组件 todo.vue 通过 `<item :item="item"></item>` 传递数据到 子组件 item.vue, 子组件通过 显示声明 `props: ['item']` 来接收父组件数据

* vue:
    * 指令: v-for, v-if, v-else, v-model
    * 属性: :disabled="xx", :key="xx"
    * 数据绑定: {{xx}}, v-model (TODO: 一个单项数据绑定 一个双向数据绑定?)
    * 函数:
        * data()
        * methods()--放事件等
    * 事件: @keyup.enter
