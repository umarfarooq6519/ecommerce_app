export default function Footer() {
  return (
    <footer className="footer mt-16 gap-6 footer-center p-10 bg-neutral-content text-neutral">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
          <a>
            <i class="fa-brands fa-twitter fa-2xl"></i>
          </a>
          <a>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Umar Farooq</p>
      </aside>
    </footer>
  );
}
