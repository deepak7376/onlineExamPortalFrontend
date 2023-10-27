// Footer.js
import React from 'react';

function Footer() {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
          <li class="nav-item"><a href="/explore" class="nav-link px-2 text-body-secondary">Explore</a></li>
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;