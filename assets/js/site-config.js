/* ==========================================================================
   站点配置 —— 三个页面（首页 / 衣装图鉴 / 人像图鉴）共用这一份
   换打包下载链接：只改下面 packUrl 那一行，保存后全站同时生效。
   GitHub 网页端即可修改：打开 assets/js/site-config.js → 铅笔图标 → 改 → Commit。
   Pages 约 1 分钟内自动发布。
   ========================================================================== */
window.SITE_CONFIG = {
  /* 打包下载按钮的跳转地址（换链接只改这一行） */
  packUrl: "https://pan.quark.cn/s/09f3fe9c227a",

  /* 是否在新标签页打开，true / false */
  packNewTab: true,

  /* 按钮文字，留空 "" 表示沿用页面原有文案「打包下载」 */
  packLabel: "",

  /* 是否显示按钮，临时下架资源时可设为 false */
  packVisible: true
};

(function () {
  function apply() {
    var cfg = window.SITE_CONFIG || {};
    var btns = document.querySelectorAll('.pack-btn');
    for (var i = 0; i < btns.length; i++) {
      var a = btns[i];
      if (cfg.packVisible === false) {
        a.style.display = 'none';
        continue;
      }
      var url = typeof cfg.packUrl === 'string' ? cfg.packUrl.trim() : '';
      if (url) a.setAttribute('href', url);
      if (cfg.packNewTab === false) {
        a.removeAttribute('target');
        a.removeAttribute('rel');
      } else {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
      if (cfg.packLabel) {
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
