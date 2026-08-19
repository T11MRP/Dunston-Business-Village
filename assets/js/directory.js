/* ==========================================================================
   Dunston Business Village — directory search & filter
   Expects window.DBV_BUSINESSES (see directory-data.js).
   Works on both the full directory page and the homepage preview.
   ========================================================================== */
(function () {
  'use strict';

  var grid = document.getElementById('dirGrid');
  if (!grid || !window.DBV_BUSINESSES) return;

  var all = window.DBV_BUSINESSES;
  var search = document.getElementById('dirSearch');
  var filters = document.getElementById('dirFilters');
  var countEl = document.getElementById('dirCount');
  var limit = parseInt(grid.dataset.limit || '0', 10);
  var activeCat = 'all';

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* Build the category chips from the data itself, so the filters always
     match what is actually listed rather than a hard-coded guess. */
  if (filters && !filters.children.length) {
    var cats = all.map(function (b) { return b.cat; })
      .filter(function (v, i, s) { return v && s.indexOf(v) === i; })
      .sort();

    var mk = function (label, value, on) {
      var btn = document.createElement('button');
      btn.className = 'chip' + (on ? ' active' : '');
      btn.type = 'button';
      btn.dataset.cat = value;
      btn.textContent = label;
      btn.setAttribute('aria-pressed', String(!!on));
      return btn;
    };

    filters.appendChild(mk('All', 'all', true));
    cats.forEach(function (c) { filters.appendChild(mk(c, c, false)); });
  }

  var render = function () {
    var q = search ? search.value.trim().toLowerCase() : '';

    var list = all.filter(function (b) {
      if (activeCat !== 'all' && b.cat !== activeCat) return false;
      if (!q) return true;
      return (b.name + ' ' + b.cat + ' ' + b.loc + ' ' + (b.kw || '') + ' ' +
              (b.door || '') + ' ' + (b.contact || '') + ' ' + (b.tel || '') + ' ' +
              (b.ext || '') + ' ' + (b.web || ''))
        .toLowerCase().indexOf(q) !== -1;
    });

    var shown = limit > 0 ? list.slice(0, limit) : list;

    if (countEl) {
      countEl.textContent = list.length === all.length
        ? 'Showing all ' + all.length + ' listings'
        : 'Showing ' + list.length + ' of ' + all.length + ' listings';
    }

    if (!shown.length) {
      grid.innerHTML = '<p class="dir-empty">No businesses match that search. Try a different term, or clear the filters.</p>';
      return;
    }

    grid.innerHTML = shown.map(function (b) {
      var where = b.reception
        ? 'Registered at reception, Woodland Lodge'
        : esc(b.loc);

      var contactBits = '';
      if (b.contact || b.tel || b.ext || b.web) {
        contactBits += '<div class="biz-contact">';
        if (b.contact) {
          contactBits += '<p class="who"><span aria-hidden="true">◈</span> ' + esc(b.contact) + '</p>';
        }
        if (b.tel) {
          // strip spaces/brackets for the dial link, keep the readable form as the label
          var dial = String(b.tel).replace(/[^\d+]/g, '');
          contactBits += '<p class="tel"><span aria-hidden="true">☎</span> ' +
            '<a href="tel:' + esc(dial) + '">' + esc(b.tel) + '</a>' +
            (b.ext ? ' <span class="ext">ext ' + esc(b.ext) + '</span>' : '') +
            '</p>';
        } else if (b.ext) {
          contactBits += '<p class="tel"><span aria-hidden="true">☎</span> ' +
            '<a href="tel:+441785711600">01785 711600</a> <span class="ext">ext ' + esc(b.ext) + '</span></p>';
        }
        if (b.web) {
          // data holds a bare domain; add the scheme for the href, show it without
          var domain = String(b.web).replace(/^https?:\/\//i, '').replace(/\/$/, '');
          // webLabel lets a long deep link show a readable label instead of the full path
          var label = b.webLabel || domain.replace(/^www\./i, '');
          contactBits += '<p class="web"><span aria-hidden="true">↗</span> ' +
            '<a href="https://' + esc(domain) + '" target="_blank" rel="noopener noreferrer">' +
            esc(label) + '</a></p>';
        }
        contactBits += '</div>';
      }

      return '<article class="biz">' +
        '<p class="cat">' + esc(b.cat) + '</p>' +
        '<h3>' + esc(b.name) + '</h3>' +
        (b.kw ? '<p>' + esc(b.kw) + '</p>' : '') +
        '<p class="lodge"><span aria-hidden="true">◉</span> ' + where + '</p>' +
        (b.door && !b.reception ? '<p class="door">Door ' + esc(b.door) + '</p>' : '') +
        contactBits +
        '</article>';
    }).join('');
  };

  if (search) {
    search.addEventListener('input', render);
  }

  if (filters) {
    filters.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      activeCat = chip.dataset.cat;
      filters.querySelectorAll('.chip').forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      render();
    });
  }

  render();
})();
