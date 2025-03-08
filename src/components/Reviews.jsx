
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratingCounts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    ratingPercentages: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  });
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    reviewTitle: "",
    reviewText: "",
    files: [],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 2; // Number of reviews to display per page
  const [refetch, setRefetch] = useState(false);

  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlbmthdGZpdG5lc3MiLCJyb2xlIjoiYWRtaW4iLCJvcmciOiJ2ZW5rYXRmaXRuZXNzLW9yZyIsImlhdCI6MTczODkwNDk5OX0.1vaDlOyr2_ZMGqTt5Tc-LE6rhqRh1Hcyq3-p_Q60aw0"; // Replace with your actual token

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://venkat-fitness.skyhitmedia.website/api/reviews/stats",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            "Error fetching review stats: " + response.statusText
          );
        }
        const data = await response.json();
        console.log("Fetched stats:", data); // Log the fetched stats
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://venkat-fitness.skyhitmedia.website/api/reviews",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching reviews: " + response.statusText);
        }

        const data = await response.json();
        console.log("Fetched reviews:", data); // Log the fetched reviews
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
    fetchReviews();
  }, [refetch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, files: selectedFiles }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("rating", formData.rating);
    form.append("reviewTitle", formData.reviewTitle);
    form.append("reviewText", formData.reviewText);

    formData.files.forEach((file) => {
      form.append("files", file);
    });
    try {
      const response = await fetch(
        "https://venkat-fitness.skyhitmedia.website/api/reviews",
        {
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting review: " + response.statusText);
      }

      const newReview = await response.json();
      console.log("New review submitted:", newReview); // Log the new review
      setRefetch(true);
      setFormData({
        name: "",
        rating: 5,
        reviewTitle: "",
        reviewText: "",
        files: [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const nextSlide = () => {
    if (currentIndex + reviewsPerPage < reviews.length) {
      setCurrentIndex((prev) => prev + reviewsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - reviewsPerPage);
    }
  };

  // Modal functions
  let currentModalIndex = 0;
  let modalImages = [];

  const openModal = (index, fileUrls, name, reviewText) => {
    currentModalIndex = index;
    modalImages = fileUrls;
    updateModal(name, reviewText);
    document.getElementById("modal").classList.remove("hidden");
  };

  const closeModal = () => {
    document.getElementById("modal").classList.add("hidden");
  };

  const updateModal = (name, reviewText) => {
    document.getElementById("modalImage").src = modalImages[currentModalIndex];
    document.getElementById("modalTitle").textContent = name;
    document.getElementById("modalContent").textContent = reviewText;
  };

  const nextImage = () => {
    if (currentModalIndex < modalImages.length - 1) {
      currentModalIndex++;
      updateModal();
    }
  };

  const prevImage = () => {
    if (currentModalIndex > 0) {
      currentModalIndex--;
      updateModal();
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentPage = Math.floor(currentIndex / reviewsPerPage) + 1;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="p-4 flex flex-col justify-between bg-gray-800 rounded-lg">
          <div>
            <div className="flex items-center mb-2">
              <h2 className="text-4xl font-bold text-gray-100">
                {Number(stats.averageRating).toFixed(1)}
              </h2>
              <span className="ml-2 text-lg text-gray-400">Out of 5 Stars</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < Math.floor(stats.averageRating)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-4">
              Overall rating of {stats.totalReviews} 1st-party reviews
            </p>
            <div className="space-y-2">
              {Object.keys(stats.ratingCounts)
                .reverse()
                .map((star) => (
                  <div key={star} className="flex items-center">
                    <span className="w-16 text-gray-400 text-sm">
                      {star} Star{star > 1 ? "s" : ""}
                    </span>
                    <div
                      className="flex-1 h-4 rounded-full mx-2"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <div
                        className="h-full bg-teal-400 rounded-full"
                        style={{
                          width: `${stats.ratingPercentages[star]}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {stats.ratingCounts[star]}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Leave a Review
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg shadow-md"
          >
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Rating
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              >
                {[5, 4, 3, 2, 1].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-1">
                Review Text
              </label>
              <textarea
                name="reviewText"
                value={formData.reviewText}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-1">
                Upload Photos
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full px-2 py-1 border rounded-md bg-gray-700 text-black"
              />
              <div className="mt-2 flex gap-2 flex-wrap">
                {formData.files.map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt="Selected"
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
        Customer Reviews
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews
            .slice(currentIndex, currentIndex + reviewsPerPage)
            .map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {/* Display stars based on the review rating */}
                    {[...Array(review.rating)].map((_, index) => (
                      <i
                        key={index}
                        className="fas fa-star text-yellow-500"
                      ></i>
                    ))}
                    {[...Array(5 - review.rating)].map((_, index) => (
                      <i key={index} className="fas fa-star text-gray-300"></i>
                    ))}
                  </div>
                </div>
                <p className="font-bold text-black">
                  {review.name} -{" "}
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
                <p className="text-black mt-2">{review.reviewText}</p>
                <div className="relative w-full mt-4 flex space-x-2">
                  {Array.isArray(review.fileUrls) &&
                  review.fileUrls.length > 0 ? (
                    review.fileUrls.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        className="w-16 h-16 object-cover rounded-md cursor-pointer"
                        onClick={() =>
                          openModal(
                            index,
                            review.fileUrls,
                            review.name,
                            review.reviewText
                          )
                        }
                      />
                    ))
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 bg-gray-700 text-white rounded-full ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + reviewsPerPage >= reviews.length}
            className={`p-2 bg-gray-700 text-white rounded-full ${
              currentIndex + reviewsPerPage >= reviews.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-600"
            }`}
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * reviewsPerPage)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentIndex / reviewsPerPage === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div
        id="modal"
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full flex relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-black text-2xl"
          >
            &times;
          </button>

          <div className="flex w-full">
            <button onClick={prevImage} className="self-center p-2 text-2xl">
              ◀
            </button>
            <img id="modalImage" src="" className="w-1/3 h-auto rounded-md" />
            <div className="ml-6 w-2/3 flex flex-col justify-center">
              <h2 id="modalTitle" className="text-xl font-bold text-black"></h2>
              <div className="flex items-center mt-2" id="modalStars">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fas fa-star text-yellow-500"></i>
                ))}
              </div>
              <p id="modalContent" className="text-black mt-2"></p>{" "}
              {/* Set text color to black */}
            </div>
            <button onClick={nextImage} className="self-center p-2 text-2xl">
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
