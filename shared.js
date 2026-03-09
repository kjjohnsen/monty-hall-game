/* === Probability Paradoxes - Shared Utilities === */

// --- Random & Shuffle ---

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flipCoin() {
  return Math.random() < 0.5;
}

// --- Math ---

function mean(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function pct(value, decimals) {
  if (decimals === undefined) decimals = 1;
  return (value * 100).toFixed(decimals) + '%';
}

function fmtNum(n) {
  return Number(n).toLocaleString();
}

function choose(n, k) {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;
  var r = 1;
  for (var i = 0; i < k; i++) {
    r = r * (n - i) / (i + 1);
  }
  return r;
}

// --- localStorage ---

function loadState(key, fallback) {
  try {
    var data = JSON.parse(localStorage.getItem(key));
    return data !== null ? data : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveState(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// --- DOM Helpers ---

function $(id) {
  return document.getElementById(id);
}

function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

function el(tag, className, text) {
  var e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

// --- Simulation Runner ---

function runSimulation(n, simFn, onProgress, onDone, batchSize) {
  if (!batchSize) batchSize = 500;
  var results = [];
  var i = 0;
  function batch() {
    var end = Math.min(i + batchSize, n);
    for (; i < end; i++) {
      results.push(simFn(i));
    }
    if (onProgress) onProgress(i, results);
    if (i < n) {
      setTimeout(batch, 0);
    } else {
      if (onDone) onDone(results);
    }
  }
  batch();
}

// --- Navigation Injector ---
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    return; // Don't add to main page
  }

  var backLink = document.querySelector('.back-link');
  if (!backLink) return;

  var links = [
    {href: 'monty-hall.html', title: 'Monty Hall Problem'},
    {href: 'birthday-paradox.html', title: 'Birthday Paradox'},
    {href: 'false-positive.html', title: 'False Positive Paradox'},
    {href: 'simpsons-paradox.html', title: 'Simpson\'s Paradox'},
    {href: 'sleeping-beauty.html', title: 'Sleeping Beauty Problem'},
    {href: 'bertrands-box.html', title: 'Bertrand\'s Box Paradox'},
    {href: 'st-petersburg.html', title: 'St. Petersburg Paradox'},
    {href: 'benfords-law.html', title: 'Benford\'s Law'},
    {href: 'secretary-problem.html', title: 'Secretary Problem'},
    {href: 'penneys-game.html', title: 'Penney\'s Game'},
    {href: 'prisoners-riddle.html', title: '100 Prisoners Riddle'}
  ];

  var navContainer = document.createElement('div');
  navContainer.className = 'nav-header';
  
  var backSpan = document.createElement('span');
  backSpan.appendChild(backLink.cloneNode(true));
  backLink.parentNode.replaceChild(navContainer, backLink);
  navContainer.appendChild(backSpan.firstChild);
  
  var select = document.createElement('select');
  select.className = 'quick-nav-select';
  select.innerHTML = '<option value="">-- Jump to another game --</option>';
  links.forEach(function(link) {
    var option = document.createElement('option');
    option.value = link.href;
    option.textContent = link.title;
    if (window.location.pathname.endsWith(link.href)) {
      option.selected = true;
    }
    select.appendChild(option);
  });
  
  select.addEventListener('change', function() {
    if (this.value) {
      window.location.href = this.value;
    }
  });

  navContainer.appendChild(select);
});

function renderBarChart(containerId, data, opts) {
  if (!opts) opts = {};
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  var maxVal = opts.maxValue || 0;
  data.forEach(function(d) {
    var v = Math.max(d.value || 0, d.expected || 0);
    if (v > maxVal) maxVal = v;
  });
  if (maxVal === 0) maxVal = 1;

  data.forEach(function(d) {
    var col = el('div', 'bar-col');

    if (opts.showExpected && d.expected !== undefined) {
      var expBar = el('div', 'bar expected');
      expBar.style.height = ((d.expected / maxVal) * 100) + '%';
      col.appendChild(expBar);
    }

    var bar = el('div', 'bar');
    bar.style.height = (((d.value || 0) / maxVal) * 100) + '%';
    col.appendChild(bar);

    if (d.valueLabel) {
      var vl = el('div', 'bar-value', d.valueLabel);
      col.insertBefore(vl, bar);
    }

    var lbl = el('div', 'bar-label', d.label);
    col.appendChild(lbl);

    container.appendChild(col);
  });
}
