/* ==========================================================================
   站点配置 —— 三个页面（首页 / 衣装图鉴 / 人像图鉴）共用这一份
   更换打包下载链接：只需修改下面 packUrl 这一行，保存后全站同时生效。
   GitHub 网页端即可修改：打开 assets/js/site-config.js → 铅笔图标 → 改 → Commit。可在 GitHub 网页端修改：打开 assets/js/site-config.js → 铅笔图标 → 修改 → 提交。
   页面约 1 分钟内自动发布。
   ========================================================================== */
window.SITE_CONFIG = {
  /* 打包下载按钮的跳转地址（换链接只改这一行） */
  packUrl: "https://pan.quark.cn/s/041ffdc84d3c",

  /* 是否在新标签页打开，true / false */
  packNewTab: true,

  /* 按钮文字，留空 "" 表示沿用页面原有文案「打包下载」 */
  packLabel: "",

  /* 是否显示按钮，临时下架资源时可设为 false */
  packVisible: true
};

(函数 () {(函数 () {
  函数 应用() {函数 应用() {
    var cfg = window.SITE_CONFIG || {};
    var btns = document.querySelectorAll('.pack-btn');
    for (var i = 0; i < btns.length; i++) {
      var a = btns[i];
      如果 (cfg.packVisible === false) {如果 (cfg配置.packVisible包装可见 === 假) {
        a.style.display = 'none';
        继续;
      }
      var url = typeof cfg.packUrl === 'string' ? cfg.packUrl.trim() : '';
      如果 (url) a.setAttribute('href', url);如果 (url网址网址) a.setAttribute('href', url网址网址);
      如果 (cfg.packNewTab === false) {如果 (cfg配置.packNewTab === 假) {
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
      if (cfg.packLabel) {如果 (cfg.packLabel) {
        var span = a.querySelector('span');
        if (span) span.textContent = cfg.packLabel;
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
