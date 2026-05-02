// Importing all child components
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

// Importing blog data
import blog from "./blog";

// App is the root component
// It holds the main data and passes it down via props
function App() {
  return (
    <div>
      {/* Passing blog name as a prop to Header */}
      <Header name={blog.name} />

      {/* Passing image and description to About */}
      <About image={blog.image} about={blog.about} />

      {/* Passing posts array to ArticleList */}
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;