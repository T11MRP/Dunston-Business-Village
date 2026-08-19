/* ==========================================================================
   Dunston Business Village — shared site scripts
   Nav, mobile menu, scroll reveal, enquiry form.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Nav: darken on scroll ---------- */
  var nav = document.getElementById('nav');
  if (nav && !nav.classList.contains('solid')) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    var focusables = function () {
      return navLinks.querySelectorAll('a[href], button:not([disabled])');
    };

    var setMenu = function (open) {
      navLinks.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        var f = focusables();
        if (f.length) f[0].focus();
      }
    };

    burger.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });

    // Escape closes; Tab is trapped inside the panel while it is open.
    document.addEventListener('keydown', function (e) {
      if (!navLinks.classList.contains('open')) return;

      if (e.key === 'Escape') {
        setMenu(false);
        burger.focus();
        return;
      }

      if (e.key !== 'Tab') return;

      var f = focusables();
      if (!f.length) return;
      var first = f[0];
      var last = f[f.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Reset the menu if the viewport grows past the mobile breakpoint.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760 && navLinks.classList.contains('open')) {
        setMenu(false);
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }
  }

  /* ---------- Enquiry form ---------- */
  // ---------------------------------------------------------------------
  // BEFORE GOING LIVE: replace the empty string below with DBV's own form
  // endpoint (their Zapier catch hook, Formspree, or a server-side handler).
  // While it is empty the form does NOT submit — it shows an honest error and
  // points the visitor at the phone number and email instead. It does not
  // pretend to have sent anything, and it does not log anyone's details.
  // ---------------------------------------------------------------------
  var FORM_ENDPOINT = '';

  var form = document.getElementById('enquiryForm');
  if (!form) return;

  var formOk = document.getElementById('formOk');
  var formFail = document.getElementById('formFail');
  var submitBtn = form.querySelector('button[type="submit"]');

  var setError = function (input, message) {
    var slot = document.getElementById(input.id + '-err');
    if (slot) slot.textContent = message || '';
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  var showFailure = function (message) {
    if (!formFail) return;
    formFail.textContent = message;
    formFail.classList.add('show');
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (formFail) formFail.classList.remove('show');

    var name = document.getElementById('ef-name');
    var email = document.getElementById('ef-email');
    var consent = document.getElementById('ef-consent');
    var firstBad = null;

    if (!name.value.trim()) {
      setError(name, 'Please enter your name.');
      firstBad = firstBad || name;
    } else {
      setError(name, '');
    }

    if (!email.value.trim()) {
      setError(email, 'Please enter your email address.');
      firstBad = firstBad || email;
    } else if (!email.checkValidity()) {
      setError(email, 'That does not look like a valid email address.');
      firstBad = firstBad || email;
    } else {
      setError(email, '');
    }

    if (consent && !consent.checked) {
      setError(consent, 'Please confirm you are happy for us to reply.');
      firstBad = firstBad || consent;
    } else if (consent) {
      setError(consent, '');
    }

    if (firstBad) {
      firstBad.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      showFailure(
        'This form is not connected yet. Please call 01785 711600 or email ' +
        'helpdesk@dunstonbusinessvillage.com and we will pick it up straight away.'
      );
      return;
    }

    var data = Object.fromEntries(new FormData(form).entries());
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed with status ' + res.status);
        form.style.display = 'none';
        if (formOk) {
          formOk.classList.add('show');
          formOk.setAttribute('tabindex', '-1');
          formOk.focus();
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send enquiry';
        showFailure(
          'Sorry, we could not send that just now. Please call 01785 711600 or ' +
          'email helpdesk@dunstonbusinessvillage.com and we will pick it up straight away.'
        );
      });
  });
})();
