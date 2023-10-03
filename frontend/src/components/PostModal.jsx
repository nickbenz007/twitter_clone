export const PostModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex inset-0 bg-opacity-25 backdrop-blur-sm items-center justify-center">
      <div className="w-80">
        <div className="bg-black rounded-xl outline-none border border-gray-700">
          <h1>This is Modal</h1>
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-full top-0 left-0 text-gray-50 text-xl font-bold"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
