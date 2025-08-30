import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  value: number;
}

const StarRating = ({ value }: StarRatingProps) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;

        if (value >= starValue) {
          return (
            <Star
              key={i}
              size={18}
              className="text-yellow-400 fill-yellow-400"
            />
          );
        } else if (value >= starValue - 0.5) {
          return (
            <StarHalf
              key={i}
              size={18}
              className=" text-yellow-400 fill-yellow-400"
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
