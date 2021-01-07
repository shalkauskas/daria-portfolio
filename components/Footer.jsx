export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="text-center absolute bottom-0 w-full">
        <h2 className="text-4xl mb-10">Let's connect!</h2>
        <a
          href="mailto:hudechka22@gmail.com?subject=portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source type="image/webp" srcSet="images/gmail_icon.webp" />
            <source type="image/png" srcSet="images/gmail_icon.png" />
            <img
              src="images/gmail_icon.png"
              alt="gmail_icon"
              className="inline-block w-16 mx-6 mb-6 h-16"
            />
          </picture>
        </a>
        <a
          href="https://www.linkedin.com/in/daria-in-ux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source type="image/webp" srcSet="images/in_icon.webp" />
            <source type="image/png" srcSet="images/in_icon.png" />
            <img
              src="images/in_icon.png"
              alt="in_icon"
              className="inline-block w-14 mx-6 mb-6 h-14"
            />
          </picture>
        </a>
      </div>
    </footer>
  );
}
