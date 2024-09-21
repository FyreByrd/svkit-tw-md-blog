import mermaid from 'mermaid';

export async function parseMermaid() {
  const nodes = document.querySelectorAll('pre.language-mermaid');
  nodes.forEach((pre) => {
    pre.classList.replace('language-mermaid', 'mermaid');
    pre.querySelectorAll('code.language-mermaid').forEach((code) => {
      code.querySelectorAll('span.token').forEach((s) => {
        s.childNodes.forEach((c) => {
          code.insertBefore(c, s);
        });
        code.removeChild(s);
      });
      pre.innerHTML = code.innerHTML;
    });
  });
  if (nodes.length) {
    try {
      await mermaid.run();
      nodes.forEach((n) => {
        Array.from(n.getElementsByTagName('svg')).forEach((svg) => {
          svg.removeAttribute('width');
        });
      });
    } catch (e) {
      console.log(e);
    }
  }
}
