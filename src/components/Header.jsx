// Header component displays the blog name
// It receives data from its parent (App) via props
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;