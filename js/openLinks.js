(() => {
  const links = document.querySelectorAll('a[href]');

  if (/(iphone)/i.test(navigator.userAgent) || /(ipad)/i.test(navigator.userAgent)) {
    links.forEach((link) => {
      link.href = link.href.replace('https://apps.apple.com/jp/app/', 'itms-apps://itunes.apple.com/app/');
    });
  } else if (/(android)/i.test(navigator.userAgent)) {
    links.forEach((link) => {
      link.href = link.href.replace('https://play.google.com/store/apps/', 'market://');
    });
  }
})();
