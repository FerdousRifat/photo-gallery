function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Photo Gallery · Built with React + Vite ·
        Data from{" "}
        <a
          href="https://jsonplaceholder.typicode.com/photos"
          target="_blank"
          rel="noreferrer"
        >
          JSONPlaceholder
        </a>
      </p>
    </footer>
  );
}

export default Footer;
