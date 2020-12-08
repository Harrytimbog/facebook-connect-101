import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Harrie is the Lone Wolf!!!", "Respect and learn his ways"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
