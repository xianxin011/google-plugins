// 更改滤镜
document.getElementById('changeFilterBtn').addEventListener('click', function () {
  chrome.tabs.executeScript({
    code: 'document.documentElement.style.filter = "hue-rotate(180deg)"'
  });
});

//去除滤镜
document.getElementById('resetFilterBtn').addEventListener('click', function () {
  chrome.tabs.executeScript({
    code: `document.documentElement.style.filter = "none"`
  });
});
