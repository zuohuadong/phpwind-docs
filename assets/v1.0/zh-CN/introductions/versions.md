## Beta 3 （预计4月发布）
1. 基于 Antvel 的商城模块
2. 微信模块

## Beta 2 （3月发布）

1. 更新Laravel到5.4（涉及结构调整）
2. 增加用户中心模块。
3. 文章多用户支持（需要安装用户中心模块）
4. 模块、插件的完整卸载安装、启用关闭机制。
5. 新版的安装引导界面。
6. 用户中心消息通知。

## Beta1 fix3 （170305）
1. 文章分类管理移动出错的BUG,目前移动后切换路由。
2. 修复分类名称不能修改的BUG。
3. 一定程度下解决，网络问题下文章重复发布的BUG
4. 页面无法发布问题（开发群 @半缕阳光）
5. 后台增加跳转到首页功能 （开发群 @半缕阳光）
6. 回收站“反选”按钮无法使用的BUG （开发群 @半缕阳光）
7. 草稿箱编辑部分内容，一直增加草稿的BUG（开发群 @半缕阳光）
8. 全站开启关闭按钮无用的BUG。

## Beta 1 fix 2 （17026）

主要解决上个版本遗留问题，整体体验更好。
1. 插件的开启、关闭、安装、卸载，插件声明相关依赖插件。
2. 模块的开启和关闭 （安装和卸载 在Beta2 中实现）
3. 整体体验的优化。
4. Vue 动态加载重写。
5. 前台SEO收录问题。

## Beta 1 fix 1 （170220）

1. 修复windows下报错问题 。（开发群 @Sher）
2. 修复postgresql 数据库下 文章发布的BUG。
3. 优化后台提示信息。
4. 修复某些情况更新配置失败的问题.
5. 修复文章和页面没有分类选择的BUG。（开发群 @半缕阳光）
6. 增加文章和页面按分类筛选。


##  Beta 1 （170219）

其实这个版本来说，还是相当不完美的版本。以下是已知BUG：
1. 由于Vue单页应用原因，插件无法动态加载。
2. 分类的排序存在很大BUG，目前不建议过多拖动。
3. 前台文章SEO问题，由于SPA单页应用的问题，目前不能被搜索引擎收录。
4. 安装和后台的一些细节提示尚待优化。

由于相对之前版本，底层有改动，故不再列出之前Alpha系列版本。