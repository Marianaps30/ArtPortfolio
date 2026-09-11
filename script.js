const artwork = [
  { title: 'Guardian', medium: 'Digital drawing', filter: 'Game', status: 'Game world', detail: 'Digital drawing, 2025', image: 'images/drawing-01.jpg', alt: 'Digital character concept Guardian', size: 'compact' },
  { title: 'Natures Embrace', medium: 'Sculpture', filter: 'Sculpture', status: 'Finished', detail: 'Mixed materials, 2025', image: 'images/sculpture-01.jpg', alt: 'Mixed-media sculpture of a person sinking into nature(Symbol of connection)', size: 'compact' },
  { title: 'Turtle Planter Planning', medium: 'Colored pencil', filter: 'Color', status: 'Finished', detail: 'Colored pencil, 2025', image: 'images/colored-pencil-01.jpg', alt: 'Colored pencil planning for turtle plant holder in three angles' },
  { title: 'Guardian 02', medium: 'Digital drawing', filter: 'Game', status: 'Game world', detail: 'Digital drawing, 2025', image: 'images/drawing-02.jpg', alt: 'Digital character concept Guardian 3 angles', size: 'compact-tall', arrangement: 'overlap-left' },
  { title: 'Turtle planter', medium: 'Sculpture', filter: 'Sculpture', status: 'Finished', detail: 'Sculpture, 2024', image: 'images/sculpture-02.jpg', alt: 'Finished sculpture placeholder' },
  { title: 'The Lion', medium: 'Sculpture', filter: 'Sculpture', status: 'Progress', detail: 'Sculpture, 2025', image: 'images/sculpture-03.jpg', alt: 'Lion sculpture angle 1', size: 'compact' },
  { title: 'Wise One', medium: 'Scratchboard', filter: 'Drawing', status: 'Finished', detail: 'Scratchboard, 2024', image: 'images/scratchboard-01.jpg', alt: 'Scratchboard drawing of an owl showing mark making skills', size: 'compact' },
  { title: 'Elora', medium: 'Digital drawing', filter: 'Game', status: 'Game world', detail: 'Digital drawing, 2025', image: 'images/drawing-03.jpg', alt: 'Digital character concept Elora', size: 'compact-tall', arrangement: 'overlap-right' },
  { title: 'Sharks', medium: 'Digital drawing', filter: 'Drawing', status: 'Finished', detail: 'Digital drawing, 2025', image: 'images/drawing-04.jpg', alt: 'Digital drawing of sharks' },
  { title: 'Parrots', medium: 'Colored pencil', filter: 'Color', status: 'Finished', detail: 'Colored pencil, 2024', image: 'images/colored-pencil-02.jpg', alt: 'Finished Colored pencil Parrot Drawing' },
  { title: 'The Lion 02', medium: 'Sculpture', filter: 'Sculpture', status: 'Progress', detail: 'Sculpture in progress, 2025', image: 'images/sculpture-04.jpg', alt: 'Lion sculpture angle 2', size: 'compact' },
  { title: 'MoonMallow', medium: 'Plushie', filter: 'Textile', status: 'Finished', detail: 'Pattern + sewn plushie, 2026', image: 'images/plushie-01.jpg', alt: 'Handmade plushie angle 1', size: 'compact' },
  { title: 'Parrots(progress)', medium: 'Colored pencil', filter: 'Color', status: 'Progress', detail: 'Colored pencil, 2024', image: 'images/colored-pencil-03.jpg', alt: 'In progress Colored pencil Parrot Drawing' },
  { title: 'Paper Sculpture', medium: 'Paper sculpture', filter: 'Sculpture', status: 'Finished', detail: '3D paper sculpture, 2025', image: 'images/paper-sculpture-01.jpg', alt: 'Paper sculpture placeholder' },
  { title: 'MoonMallow 02', medium: 'Plushie', filter: 'Textile', status: 'Finished', detail: 'Pattern + sewn plushie, 2026', image: 'images/plushie-02.jpg', alt: 'Handmade plushie angle 2', size: 'compact', arrangement: 'overlap-up' },
  { title: 'A broken image', medium: 'Pen', filter: 'Drawing', status: 'Finished', detail: 'Pen on paper, 2025', image: 'images/pen-01.jpg', alt: 'Pen mirror drawing', size: 'compact' },
  { title: 'The structure', medium: 'Watercolor', filter: 'Color', status: 'Finished', detail: 'Watercolor, 2025', image: 'images/watercolor-01.jpg', alt: 'Watercolor painting skeloton', size: 'compact' },
  { title: 'Face shape studies', medium: 'Alcohol marker', filter: 'Color', status: 'Finished', detail: 'Alcohol marker, 2026', image: 'images/alcohol-marker-01.jpg', alt: 'Acrylic marker artwork placeholder' },
  { title: 'Missing Piece of the Heart', medium: 'Colored pencil', filter: 'Color', status: 'Finished', detail: 'Colored pencil, 2025', image: 'images/colored-pencil-04.jpg', alt: 'Colored pencil work in progress placeholder' },
  { title: 'Character models', medium: '3D model', filter: 'Game', status: 'Game world', detail: 'Unreal Engine study, 2025', image: 'images/3d-model-01.jpg', alt: '3D character models' }
];

const archiveOrder = ['Turtle planter', 'The Lion', 'The Lion 02', 'Paper Sculpture', 'Character models', 'Parrots', 'Parrots(progress)', 'Face shape studies', 'Sharks', 'Wise One', 'Natures Embrace', 'The structure', 'Missing Piece of the Heart', 'Turtle Planter Planning', 'A broken image', 'MoonMallow 02', 'MoonMallow', 'Guardian', 'Guardian 02', 'Elora'];
artwork.sort((first, second) => archiveOrder.indexOf(first.title) - archiveOrder.indexOf(second.title));

const mechanisms = [
  { number: '01', group: 'Core loop', title: 'What does the player do?', text: 'Explore Aether-scarred wilderness, recover Knowledge Sigils, and weigh truth against survival.', tone: 'lime' },
  { number: '02', group: 'Dual meters', title: 'What is the cost of knowing?', text: 'Taint Resistance and Sanity trade off — corruption grants insight, but clarity comes at a price.', tone: 'paper' },
  { number: '03', group: 'Aether Insight', title: 'What can be carried?', text: 'A TR-driven ability revealing hidden paths, motives, and truths the world tries to hide.', tone: 'blue' },
  { number: '04', group: 'World logic', title: 'What changes?', text: 'Low Sanity corrupts the HUD itself — markers lie, forcing intuition over interface.', tone: 'coral' },
  { number: '05', group: 'Characters', title: 'Who knows what?', text: 'Three factions offer power, safety, or freedom — each demanding a different kind of loss.', tone: 'paper' },
  { number: '06', group: 'Space', title: 'Where does the story hide?', text: 'Sterile citadels, corrupted bogs, and barren crags, each shaping how the player is allowed to move.', tone: 'lime' },
  { number: '07', group: 'Choices', title: 'What has a consequence?', text: 'A hidden Corrupting Choice Score tracks moral compromise and quietly locks away certain endings.', tone: 'blue' },
  { number: '08', group: 'Combat', title: 'What does a place remember?', text: 'Deliberate, resource-heavy action where Aetheric power is drawn from the same corruption that erodes you.', tone: 'coral' },
  { number: '09', group: 'Narrative', title: 'What stays unwritten?', text: 'Eight endings shaped by sanity, corruption, and faction — none of them simply "winning".', tone: 'paper' },
  { number: '10', group: 'Testing', title: 'What needs to be tried?', text: 'Whether losing control (Involuntary Compulsion) reads as tension or frustration in play.', tone: 'lime' }
];

const gallery = document.querySelector('#gallery');
const count = document.querySelector('.work-count');
const buttons = document.querySelectorAll('.filter-button');
const mechanismGrid = document.querySelector('#mechanism-grid');
const templateButton = document.querySelector('#template-button');

templateButton.addEventListener('click', async () => {
  templateButton.disabled = true;
  templateButton.textContent = 'Preparing...';
  const canvas = await html2canvas(document.body, { backgroundColor: '#f1eee6', scale: 1 });
  const link = document.createElement('a');
  link.download = 'mariana-portfolio-procreate-template.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  templateButton.disabled = false;
  templateButton.textContent = 'Download template';
});

function renderGallery(filter = 'All') {
  const visibleArtwork = filter === 'All' ? artwork : artwork.filter((piece) => piece.filter === filter);
  gallery.innerHTML = visibleArtwork.map((piece, index) => `
    <figure class="art-card card-${(index % 5) + 1}${piece.size ? ` art-card--${piece.size}` : ''}${piece.arrangement ? ` art-card--${piece.arrangement}` : ''}">
      <div class="art-image-wrap">
        <img src="${piece.image}" alt="${piece.alt}" loading="lazy">
        <span class="art-status">${piece.status}</span>
        <span class="art-number">${String(artwork.indexOf(piece) + 1).padStart(2, '0')}</span>
      </div>
      <figcaption class="art-caption">
        <span><strong class="art-title">${piece.title}</strong><small>${piece.medium}</small></span>
        <span class="art-meta">${piece.detail}</span>
      </figcaption>
    </figure>
  `).join('');
  count.textContent = `${visibleArtwork.length.toString().padStart(2, '0')} works`;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderGallery(button.dataset.filter);
  });
});

mechanismGrid.innerHTML = mechanisms.map((mechanism) => `
  <article class="mechanism-card mechanism-${mechanism.tone}">
    <span class="mechanism-number">${mechanism.number}</span>
    <span class="mechanism-group">${mechanism.group}</span>
    <h4>${mechanism.title}</h4>
    <p>${mechanism.text}</p>
  </article>
`).join('');

renderGallery();
