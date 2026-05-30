import { useEffect, useState, useCallback, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./react-slick.css";
import "slick-carousel/slick/slick.css";
import {
  QUERY_SLUG_CATEGORIES,
  QUERY_SLUG_POSTS,
  grahcms,
} from "./utils/Queries";
import { Helmet } from "react-helmet";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Lazy-loaded components
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Transformations = lazy(() => import("./pages/Transformations"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
import Training from "./pages/Training";
const ThankYou = lazy(() => import("./components/ThankYou"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogContent = lazy(() => import("./pages/BlogContent"));
const CategoryBlogs = lazy(() => import("./pages/CategoryBlogs"));
function App() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(21);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch categories only once when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await grahcms.request(QUERY_SLUG_CATEGORIES);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch posts whenever `postsPerPage` or `currentPage` changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = QUERY_SLUG_POSTS(postsPerPage, currentPage);
        const data = await grahcms.request(query);
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [postsPerPage, currentPage]);

  // Use callback to avoid re-rendering children components unnecessarily
  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Helmet>
          <title>
            Venkat Fitness Trainer - #1 Best Fitness Trainer in Hyderabad -
            India
          </title>
          <meta
            name="title"
            content="Venkat Fitness Trainer - Best Fitness Trainer in Hyderabad - India"
          />
          <meta
            name="description"
            content="Venkat Fitness Trainer is the Best Fitness Trainer in Hyderabad having 15+ Years experience in the field of fitness and has transformed over hundreds of clients through his training"
          />
          <meta
            name="keywords"
            content="Venkat Fitness Trainer, fitness trainer venkat, best fitness trainer in hyderabad, Personal Trainer near me in Hyderabad, Personal fitness trainer in Hyderabad, Celebrity fitness trainers in Hyderabad, Best fitness trainer in hyderabad for ladies, Best fitness trainer in hyderabad for weight loss, venket fitness, venket fitness trainer, venkat madamala, Best gym in hyderabad, Top Gyms in Jubilee Hills, Best gym in jubilee hills hyderabad, Best gym in jubilee hills with price, Gyms in Banjara Hills"
          />
          <meta
            property="og:title"
            content="Venkat Fitness Trainer - Best Fitness Trainer in Hyderabad - India"
          />
          <meta
            property="og:description"
            content="Venkat Fitness Trainer is the Best Fitness Trainer in Hyderabad having 15+ Years experience in the field of fitness and has transformed over hundreds of clients through his training"
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="https://venketfitness.com/" />
        </Helmet>
        <main id="main-content">
          <Suspense fallback={<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/online-training" element={<Training />} />
              <Route path="/online-fitness-training" element={<Training />} />
              <Route
                path="/blogs"
                element={
                  <Blogs
                    Blogs={posts}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                }
              />
              <Route path="/blog/:slug" element={<Navigate to="/:slug" />} />
              <Route path="/:slug" element={<BlogContent />} />
              <Route
                path="/blog/category/:name"
                element={<CategoryBlogs posts={posts} categories={categories} />}
              />
              <Route path="/thank-you" element={<ThankYou />} />
              {/* Fallback route to redirect all 404 pages to Home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <WhatsAppFloat/>
        {/* <EntryPopupBanner/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
