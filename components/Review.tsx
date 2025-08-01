import { FaStar } from "react-icons/fa";

interface ReviewProps {
  rating: number;
  title: string;
  content: string;
}

const Review: React.FC<ReviewProps> = ({
  rating = 5,
  title = "Default Title",
  content = "Default content for the review.",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={`w-5 h-5 ${i < rating ? "text-green-500" : "text-gray-300"}`} />
        ))}
      </div>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 font-light">{content}</p>
    </div>
  );
};

export default Review;
