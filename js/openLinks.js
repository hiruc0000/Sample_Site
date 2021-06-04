(() => {
  const links = document.querySelectorAll('a[href]');

  for (let i = 0; i < links.length; i++) {
    const linkAgent = links[i].getAttribute('data-agent');

    if (linkAgent === null) {
      return;
    }

    if (linkAgent === 'ios') {
      if (/(iphone)/i.test(navigator.userAgent) || /(ipad)/i.test(navigator.userAgent)) {
        links.forEach((link) => {
          link.href = link.href.replace('https://apps.apple.com/jp/app/', 'itms-apps://itunes.apple.com/app/');
        });
      }
    }

    if (linkAgent === 'android') {
      if (/(android)/i.test(navigator.userAgent)) {
        links.forEach((link) => {
          link.href = link.href.replace('https://play.google.com/store/apps/', 'market://');
        });
      }
    }
  }
})();
