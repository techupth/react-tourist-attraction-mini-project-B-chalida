import React from "react";

const ArticleItem = ({ trips, search, searchKeywords }) => {
  const tagClick = (tag) => {
    const tagExists = searchKeywords.includes(tag);
    if (!tagExists) {
      const newWords = searchKeywords ? `${searchKeywords}, ${tag}` : tag;
      search(newWords);
    }
  };
  return (
    <div>
      {trips.map((trip) => (
        <div className="px-[120px] flex gap-12 pb-10 " key={trip.eid}>
          <div>
            <img
              src={trip.photos[0]}
              alt={trip.title}
              className="w-[400px] h-[270px] rounded-[30px]"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-['Kanit']">
              <h2 className="text-2xl font-medium">{trip.title}</h2>
              <p className="text-[#8c8c90]">
                {trip.description.substring(0, 100) + "..."}
              </p>
              <p className="text-[#00BFFF]">
                <a href={trip.url} className="underline">
                  อ่านต่อ
                </a>
              </p>
              <ul className="flex gap-4 pb-5 text-[#8c8c90]">
                <li>หมวด</li>
                {trip.tags.map((tag) => (
                  <li
                    key={tag}
                    className="underline"
                    onClick={() => tagClick(tag)}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div key={trip.photos} className="flex gap-6">
                {trip.photos.slice(1).map((photo, index) => (
                  <img
                    key={index + 1}
                    src={photo}
                    alt={trip.title}
                    className="w-[100px] h-[100px] rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleItem;
