export function reveal(node: HTMLElement, options: { threshold?: number; y?: number; delay?: number } = {}) {
  const { threshold = 0.15, y = 20, delay = 0 } = options;
  let hasShown = false;
  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!hasShown && entry.isIntersecting) {
        hasShown = true;
        node.style.transition = 'opacity 600ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1)';
        node.style.transitionDelay = `${delay}ms`;
        requestAnimationFrame(() => {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
        });
        observer.unobserve(node);
      }
    });
  }, { threshold });
  observer.observe(node);
  return {
    destroy() { observer.disconnect(); }
  };
}
