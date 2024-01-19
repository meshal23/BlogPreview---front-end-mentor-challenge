import "./BlogPreviewPage.css";

function BlogPreview() {
  return (
    <section className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-98  bg-white rounded-lg p-5 shadow-my-shadow border border-black">
      <div className="flex flex-col">
        <div>
          <img
            src="./img/1.svg"
            className="rounded-lg w-full h-36 object-cover mb-5"
            alt="design-image"
          />
        </div>
        <div className="bg-my-yellow w-2/6 p-1 rounded-md font-extrabold">
          <p>Learning</p>
        </div>
        <small className="text-left my-3 font-medium">
          Published 21 Dec 2023
        </small>
        <div className="text-left text-xl font-extrabold mb-3 hover:cursor-pointer">
          HTML & CSS foundations
        </div>
        <p className="text-slate-500 text-sm text-left mb-3">
          These languages are the backbone of every website, defining structure,
          content, and presentation
        </p>
        <div className="flex justify-between w-7/12 items-center">
          <img src="./img/image-avatar.jpg" className="w-10" alt="profile" />
          <p className="font-extrabold">Greg Hooper</p>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
