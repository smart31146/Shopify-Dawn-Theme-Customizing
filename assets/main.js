(function(win,doc){

    let _checkNav = function(){
        let scrollThreshold = 10;
        let lastScrollPosition = win.pageYOffset;

        const header = doc.getElementById('shopify-section-sections--16398058848440__header');
        if (header) {
            if (lastScrollPosition <= scrollThreshold) {
                header.classList.remove("nk-scrolled");
            }else{
                header.classList.add("nk-scrolled");
            }
            
        }

    }
    win.addEventListener("pageshow",_checkNav);
    win.addEventListener("scroll", _checkNav);

    doc.addEventListener('DOMContentLoaded',function(){
        const abar = doc.getElementById("shopify-section-sections--16398058848440__announcement-bar");
        if (abar) {
            doc.documentElement.style
            .setProperty('--announcement-bar-height', abar.offsetHeight + 'px');
        }

        const header = doc.getElementById('shopify-section-sections--16398058848440__header');
        if (header) {
            let headerInAction = function(){
                const isTouch = window.matchMedia("(-moz-touch-enabled: 1), (hover: none)").matches;
                const isPc = window.matchMedia("(min-width: 750px)").matches;
                if(!isTouch || isPc){
                    header.classList.add("nk-hover");
                }
            }
            let headerOutAction = function(){
                if (header.querySelector('.header__inline-menu>ul>li>header-menu>details[open]')) {

                }else{
                    header.classList.remove("nk-hover");
                }

            }

            header.addEventListener("mouseenter",headerInAction);
            header.addEventListener("focusin",headerInAction);
            header.addEventListener("mouseleave",headerOutAction);
        }

        // 監視対象の要素を選択
        const targetElement = document.getElementById('Details-menu-drawer-container');

        // MutationObserverのコールバック関数を定義
        const callback = function(mutationsList, observer) {
          for(const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
              // 'open' 属性の存在をチェック
              const isOpen = targetElement.hasAttribute('open');
              if (isOpen) {
                    header.classList.add("nk-hover");
              } else {
                    header.classList.remove("nk-hover");
              }
            }
          }
        };

        // MutationObserverのインスタンスを作成
        const observer = new MutationObserver(callback);

        // オプションで監視の設定を行う
        const config = { attributes: true };

        // 要素の監視を開始
        observer.observe(targetElement, config);

    });
})(window,document);
