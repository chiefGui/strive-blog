const getCanonicalURL = () =>
  (document.querySelector(['head meta[property="og:url"][content]']) || {})
    .content ||
  (document.querySelector(['head link[rel="canonical"][href]']) || {}).href ||
  window.location.href

export default getCanonicalURL
