// Avatar.jsx
export default function AvatarCard() {
  return (
    <div className="h-full">
      <img
        src="/image/avatar.jpg"
        alt="avatar"
        className="w-96 h-[70%] border-4 drop-shadow-md rounded-xl object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
    </div>
  );
};
