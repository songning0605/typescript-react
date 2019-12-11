复用模块和特定场景下的模块需要分开进行处理，页面的布局view必须整理出来,可以参考[react boilerplate](https://github.com/react-boilerplate/react-boilerplate)。
```
|——app
   |—— component                # 这里放的都是公共部分的组件
       |—— Header               # 使用 styled-components 来定义基础组件
       └── Fotter
   |—— containers               # 页面容器
       |—— HomePage
           |—— ...
           |—— index.js        # 组织页面的结构, 私有模块和公共模块构成
           |—— reducer.js      # Home下的reducer逻辑
           |—— component     # 私有模块
           |—— sagas.js        # Home下的异步数据
           |—— action.js
           |—— ...
           └── reducers.js   # reducer
```
可以说这套项目结构很适合大型项目的组织，component下面包括了大量的通用组件，不管是项目的平台移植，模块复用都很好管理。containers下如HomePage/index.js有复用的模块以及页面场景下特殊的模块构成，同时index.js还负责模块跟redux store数据的链接，对应的每个场景都拥有自身saga，reducer等。构建大型的项目结构参考这个也是一个非常棒的。

react boilerplate 确实可以解决大型项目的结构问题，但是component 和布局结构混合在一起，并没有分离出去，下面这种结构分离了组件，布局模块，更好的管理项目（文件结构同时也增加了复杂度）。
```
|── src/
|  |── views
   |   |—— Home.js         # Home Page 页面
   |   |—— HomeRedux.js    # Home Redux 集合
   |   └── Detail.js       # Detail Page 页面
   |—— redux
   |   └── reducers.js     # 统一了views下的所有reducer
   |—— layouts            # layouts 负责整个app 的布局结构
   |   |—— Frame.js
   |   |—— Nav.js      
   |—— components
   |   |—— Common          # 通用组件
   |   |—— Home            # Home Page下用到的组件
   |   |   |—— Preview.js
   |   |   └── PreviewRedux.js   # Preview组件用到的reducer, 以及action
```

`layouts` 代码
```
return (
      <div className="frame">
        <div className="header">
          <Nav />
        </div>
        <div className="container">
          // View下面的Page 都会在此
          { this.props.children }
        </div>
      </div>
    );
```

[`redux`结构设置解析文章](https://juejin.im/post/58cbfcb05c497d0057b9b228)，[对应的`GitHub`仓库](https://github.com/bodyno/react-starter-kit/blob/master/src/routes/Elapse/containers/ElapseContainer.js)

各种版本的 `react-starter-kit`

https://github.com/bodyno/react-starter-kit/blob/master/src/routes/Elapse/containers/ElapseContainer.js

https://github.com/davezuko/react-redux-starter-kit

https://github.com/kriasoft/react-starter-kit


这个项目的结构使用的是 fractal(不规则碎片形：适合大型项目)*，方法的分组主要是依照特性而不是文件类型。注意，这个目录结构只是一个指引，并不一定要按这个来。这种结构谐在让程序更容易扩展
```
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── components           # 全局可复用的表现组件(Presentational Components)
│   ├── containers           # 全局可复用的容器组件
│   ├── layouts              # 主页结构
│   ├── store                # Redux指定块
│   │   ├── createStore.js   # 创建和使用redux store
│   │   └── reducers.js      # Reducer注册和注入
│   └── routes               # 主路由和异步分割点
│       ├── index.js         # 用store启动主程序路由
│       ├── Root.js          # 为上下文providers包住组件
│       └── Home             # 不规则路由
│           ├── index.js     # 路由定义和代码异步分割
│           ├── assets       # 组件引入的静态资源
│           ├── components   # 直观React组件
│           ├── container    # 连接actions和store
│           ├── modules      # reducers/constants/actions的集合
│           └── routes **    # 不规则子路由(** 可选择的)
```