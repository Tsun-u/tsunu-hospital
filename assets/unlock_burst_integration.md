# 解鎖新動物登場演出整合

動畫規格：256×256、透明背景、60fps、105 幀（1.75 秒），設計為單次播放。

## 載入

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>
<div id="unlock-burst" aria-hidden="true"></div>
```

```js
const unlockBurst = lottie.loadAnimation({
  container: document.getElementById('unlock-burst'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'assets/unlock_burst.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet',
    progressiveLoad: true
  }
});
```

## 觸發

每次解鎖前先回到第 0 幀，再播放一次；這樣同一個實例可以重複使用。

```js
function playAnimalUnlockBurst() {
  unlockBurst.stop();
  unlockBurst.goToAndPlay(0, true);
}
```

如果動畫尚未載入完成就可能觸發事件，請先等待 `DOMLoaded`，或在事件抵達時暫存一次播放要求。

## 疊放位置

建議讓容器絕對定位在門口中心，尺寸依場景縮放但保持正方形；容器本身不要攔截操作。

```css
#unlock-burst {
  position: absolute;
  left: var(--door-center-x);
  top: var(--door-center-y);
  width: 256px;
  height: 256px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 30;
}
```

建議層級：門口／場景 `z-index: 20`、本動畫 `z-index: 30`、探頭動物 `z-index: 40`。如此光暈與粒子會襯在動物後方，不會蓋住新動物的臉。播放完畢可保留實例待下次重播；若頁面會切換場景，再呼叫 `unlockBurst.destroy()` 釋放資源。

播放時長為 1.75 秒。遊戲事件建議在觸發動畫後約 0.13 秒（第 8 幀）開始讓動物探頭，主星與爆發會在該時點接棒登場。
