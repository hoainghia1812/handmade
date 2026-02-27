export default function ChatButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">chat_bubble</span>
      </button>
    </div>
  );
}
