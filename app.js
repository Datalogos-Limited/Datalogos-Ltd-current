/* Datalogos corporate site interactions and source-linked AIdentity blog archive. */
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation')}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const grid=document.querySelector('#blog-grid');
if(grid){
  const search=document.querySelector('#blog-search');
  const filters=document.querySelector('#blog-filters');
  const count=document.querySelector('#blog-count');
  const more=document.querySelector('#blog-more');
  let posts=[];let selected='All topics';let shown=9;
  const topicFor=title=>{const t=title.toLowerCase();if(/privacy|consent|trust|data accuracy|discrimination/.test(t))return 'Privacy & trust';if(/ethic|responsib|fairness/.test(t))return 'Ethics & responsible AI';if(/case study|case:/.test(t))return 'Case studies';if(/strategy|transformation|business outcome|services/.test(t))return 'Data strategy';return 'AI & data governance'};
  const esc=value=>String(value||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const visiblePosts=()=>{const q=search.value.trim().toLowerCase();return posts.filter(post=>(selected==='All topics'||post.topic===selected)&&(!q||`${post.title} ${post.topic} ${post.published}`.toLowerCase().includes(q)))};
  const drawFilters=()=>{const topics=['All topics',...new Set(posts.map(p=>p.topic))];filters.innerHTML=topics.map(topic=>`<button type="button" class="blog-filter${topic===selected?' active':''}" aria-pressed="${topic===selected}" data-topic="${esc(topic)}">${esc(topic)}<span>${topic==='All topics'?posts.length:posts.filter(p=>p.topic===topic).length}</span></button>`).join('');filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{selected=button.dataset.topic;shown=9;drawFilters();drawPosts()}))};
  const drawPosts=()=>{const result=visiblePosts();grid.innerHTML=result.slice(0,shown).map(post=>`<article class="archive-card"><div class="archive-card-top"><span>${esc(post.topic)}</span><time>${esc(post.published)}</time></div><h3>${esc(post.title)}</h3><p>By ${esc(post.author||'AIdentity')}</p><div class="archive-card-links"><a class="drive-article-link" href="${esc(post.doc)}" target="_blank" rel="noopener">Open article on Google Drive ↗</a></div></article>`).join('');count.textContent=`Showing ${Math.min(shown,result.length)} of ${result.length} article${result.length===1?'':'s'}${selected==='All topics'?' in the archive':` in ${selected}`}.`;more.hidden=result.length<=shown};
  search.addEventListener('input',()=>{shown=9;drawPosts()});more.addEventListener('click',()=>{shown+=9;drawPosts()});
  const prepareArchive=data=>{posts=data.map(post=>({...post,topic:topicFor(post.title)})).sort((a,b)=>new Date(b.published)-new Date(a.published));drawFilters();drawPosts()};
  fetch('data/blog-index.json').then(response=>{if(!response.ok)throw new Error('Archive unavailable');return response.json()}).then(prepareArchive).catch(()=>{try{const data=JSON.parse(document.querySelector('#blog-data')?.textContent||'[]');if(data.length){prepareArchive(data);return}}catch{}count.textContent='The Google Drive article list could not be loaded.';grid.innerHTML='<p class="blog-load-error">Open the Google Drive article index using the link above.</p>'});
}
