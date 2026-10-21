(() => {
  const path = location.pathname.toLowerCase();
  const isLecture = path.endsWith('lecture.html');
  const nav = document.createElement('aside');
  nav.className = 'aa-sidebar';
  nav.innerHTML = `
    <a class="aa-side-brand" href="index.html"><span class="aa-logo">A</span><span>AshArrow<small>MEDICAL LEARNING</small></span></a>
    <div class="aa-side-label">WORKSPACE</div>
    <a class="aa-nav-link ${!isLecture?'active':''}" href="index.html"><span>▦</span> Dashboard</a>
    <a class="aa-nav-link" href="index.html#subjects"><span>✣</span> Subject library <b>19</b></a>
    ${isLecture?'<a class="aa-nav-link active" href="#courseTop"><span>▷</span> Lecture room</a>':'<a class="aa-nav-link" href="#activity"><span>◷</span> Study activity</a>'}
    <div class="aa-side-label aa-side-label-spaced">YOUR STUDY</div>
    <a class="aa-nav-link" href="index.html#subjects"><span>⌕</span> Find a subject</a>
    <a class="aa-nav-link" href="lecture.html?subject=pathology"><span>⌁</span> Continue learning</a>
    <div class="aa-side-spacer"></div>
    <div class="aa-side-tip"><span class="aa-tip-icon">✦</span><strong>One topic at a time.</strong><p>Small, consistent sessions build stronger clinical foundations.</p></div>
    <div class="aa-side-footer"><span class="aa-status-dot"></span> Your progress stays on this device</div>`;
  document.body.prepend(nav);
  const shell = document.querySelector('.app-shell');
  if (shell) shell.classList.add('aa-has-sidebar');
  const header = document.querySelector('.topbar');
  if (header && isLecture) header.id = 'courseTop';
  const activity = document.querySelector('.daily-card'); if (activity) activity.id='activity';
  const toggle = document.createElement('button'); toggle.className='aa-mobile-menu'; toggle.type='button'; toggle.setAttribute('aria-label','Open navigation'); toggle.textContent='☰';
  document.body.append(toggle);
  toggle.addEventListener('click',()=>{nav.classList.toggle('aa-open');toggle.textContent=nav.classList.contains('aa-open')?'×':'☰';});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('aa-open');toggle.textContent='☰';}));
  // Respect reduced-motion preferences while revealing page sections as they enter view.
  const targets = document.querySelectorAll('.hero-card,.daily-card,.section-block,.subject-card,.educator-banner,.course-card,.player-card,.playlist-card,.notes-card');
  targets.forEach((el,i)=>{el.classList.add('aa-reveal');el.style.setProperty('--aa-delay',`${Math.min(i%6,5)*55}ms`);});
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('aa-visible');io.unobserve(e.target);}}),{threshold:.08});
    targets.forEach(el=>io.observe(el));
  } else targets.forEach(el=>el.classList.add('aa-visible'));
})();
