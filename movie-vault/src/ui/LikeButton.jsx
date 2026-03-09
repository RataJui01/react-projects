import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function LikeButton({ liked = false, ...props }) {
  return (
    <button {...props} className="text-red-500">
      {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
    </button>
  );
}
