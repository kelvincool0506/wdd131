// DOM elements
const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.navigation');

// Update footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamburger.textContent = navigation.classList.contains('show') ? '✕' : '☰';
});

// Close menu when clicking on a link (for mobile)
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navigation.classList.remove('show');
      hamburger.textContent = '☰';
    }
  });
});

// ──────────────────────────────────────────────────────────────
// Temple data array (with your 3 new entries already appended)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, December, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-exterior-717144-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, August, 5",
    area: 53534,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-1014805-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 26753,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1374199-wallpaper.jpg"
  }
];

// ──────────────────────────────────────────────────────────────
// grab the container where cards will go
const container = document.getElementById('templeCards');

// helper: clear & render an array of temples
function displayTemples(list) {
  container.innerHTML = '';
  list.forEach(temple => {
    const card = document.createElement('article');
    card.classList.add('temple-card');

    const h2 = document.createElement('h2');
    h2.textContent = temple.templeName;
    card.appendChild(h2);

    const loc = document.createElement('p');
    loc.textContent = `Location: ${temple.location}`;
    card.appendChild(loc);

    const ded = document.createElement('p');
    ded.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(ded);

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
    card.appendChild(area);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    card.appendChild(img);

    container.appendChild(card);
  });
}

// ──────────────────────────────────────────────────────────────
// initial display = Home (all temples)
displayTemples(temples);

// ──────────────────────────────────────────────────────────────
// filter handlers
// make sure your <nav> links have these IDs: home, old, new, large, small

document.getElementById('home').addEventListener('click', () => {
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => parseInt(t.dedicated.split(',')[0], 10) < 1900)
  );
});

document.getElementById('new').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => parseInt(t.dedicated.split(',')[0], 10) > 2000)
  );
});

document.getElementById('large').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => t.area > 90000)
  );
});

document.getElementById('small').addEventListener('click', () => {
  displayTemples(
    temples.filter(t => t.area < 10000)
  );
});
```