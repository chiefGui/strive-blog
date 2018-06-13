const actualDocument = typeof document !== 'undefined' && document

const getCanonicalURL = () =>
  (
    actualDocument.querySelector(['head meta[property="og:url"][content]']) ||
    {}
  ).content ||
  (actualDocument.querySelector(['head link[rel="canonical"][href]']) || {})
    .href ||
  (typeof window !== 'undefined' && window.location.href)

export default getCanonicalURL
