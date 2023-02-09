import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import History from "./data/history.json";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={History} />
      <MyFooter />
    </>
  );
}

export default App;
