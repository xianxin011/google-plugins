chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    chrome.browserAction.setBadgeText(1)
    // 检查是否是窗口关闭
    if (removeInfo.isWindowClosing) return; // 忽略窗口关闭事件
    var confirmClose = confirm('是否需要打开新的导航页？');
    if (confirmClose) {
      chrome.tabs.create({ url: 'https://www.google.com' }, function (tab) {
        if (chrome.runtime.lastError) {
          alert('无法打开新标签页：' + chrome.runtime.lastError.message);
          return;
        }
        // 在新标签页中启用 Incognito 模式
        chrome.windows.get(tab.windowId, function (window) {
          chrome.windows.update(window.id, { incognito: true });
        });
      });
      
    }
  });
  /**
   * chrome.browserAction.onClicked 用于添加单击事件监听器
   * chrome.browserAction.setIcon设置工具栏图标
   * chrome.browserAction.setTitle设置工具栏提示信息
   * chrome.browserAction.getTitle()获取工具栏提示信息
   * chrome.browserAction.setPopup()设置弹出菜单页面
   * chrome.browserAction.getPopup()获取当前弹出菜单页面
   * chrome.browserAction.disable()禁用工具栏图标和菜单
   * chrome.browserAction.enable()启用工具栏图标和菜单
   * chrome.browserAction.setBadgeText设置工具栏图标的角标
   * chrome.browserAction.setBadgeBackgroundColor设置工具栏图标的角标背景颜色
   */
  