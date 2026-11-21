function Footer() {
  return (
    <footer className="App-footer">
      <nav className="App-footer-links" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/deeppancholi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/DPancs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        {/*
          TODO(Deep): replace this placeholder email address with the
          address you want in the footer.
        */}
        <a href="mailto:deep.pancholi@example.com">Email</a>
      </nav>
      <p>© 2026 Deep Pancholi</p>
    </footer>
  );
}

export default Footer;
