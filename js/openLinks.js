(() => {
  if (/(iphone)/i.test(navigator.userAgent) || /(ipad)/i.test(navigator.userAgent)) {
    document.querySelectorAll('a[href]').forEach((link) => {
      link.href = link.href.replace('https://apps.apple.com/jp/app/', 'itms-apps://itunes.apple.com/app/');
    });
  }

  if (/(android)/i.test(navigator.userAgent)) {
    document.querySelectorAll('a[href]').forEach((link) => {
      link.href = link.href.replace('https://play.google.com/store/apps/', 'market://');
    });
  }
})();
