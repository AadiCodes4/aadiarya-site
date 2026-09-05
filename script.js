document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
toggle.addEventListener('click', () => {
const isOpen = nav.classList.toggle('open');
toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('open');
toggle.setAttribute('aria-expanded', 'false');
});
});
}

(function () {
  const overlay = document.getElementById('intro-overlay');
    if (!overlay) return;

      const skip = document.getElementById('intro-skip');
        let already = false;
          try { already = sessionStorage.getItem('introPlayed') === '1'; } catch (e) {}

            if (already) {
                overlay.hidden = true;
                    return;
                      }

                        function dismiss() {
                            overlay.classList.add('intro-fade');
                                document.body.style.overflow = '';
                                    setTimeout(() => { overlay.hidden = true; }, 650);
                                        try { sessionStorage.setItem('introPlayed', '1'); } catch (e) {}
                                          }

                                            document.body.style.overflow = 'hidden';
                                              if (skip) skip.addEventListener('click', dismiss);
                                                setTimeout(dismiss, 3400);
                                                })();
