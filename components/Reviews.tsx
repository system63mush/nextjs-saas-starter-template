import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "What kind of game is Goalbound?",
    content:
      "Goalbound is an exciting anime-inspired soccer game on Roblox that features 5v5 dynamic soccer matches. Players can choose unique characters with powerful abilities, compete in various game modes, and customize their gameplay experience.",
  },
  {
    rating: 5,
    title: "when is Goalbound coming out?",
    content:
      "Goalbound is an upcoming Roblox soccer game inspired by Blue Lock, set to release in June 2025. Goalbound is currently in Beta Release and receives regular updates from the developers (Current.), ",
  },
  {
    rating: 5,
    title: "Are there different game modes in Goalbound?",
    content:
      "Yes! Goalbound offers multiple game modes, including quick matches for casual play, tournaments for competitive gameplay, and special events that bring new challenges and rewards to the game.",
  },
  {
    rating: 4,
    title: "How to obtain Goalbound codes roblox?",
    content:
      "Participate in the Goalbound community on Roblox or other social platforms where players share codes, strategies, and tips. Discord is often a great place to find new codes from other players or developers.",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
