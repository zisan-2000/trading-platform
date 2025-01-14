const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border py-4 dark:bg-[#0C0A09] bg-white">
      <div className="container">
        <p className="text-center">
          &copy;Copyright {new Date().getFullYear()} Designed by Birds of Eden
        </p>
      </div>
    </footer>
  );
};

export default Footer;
