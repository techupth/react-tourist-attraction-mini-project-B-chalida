const HeaderSection = ({ search, searchKeywords }) => {
  return (
    <div>
      <div className="flex justify-center pt-20 pb-5">
        <h1 className="text-[#0CAFFF] text-5xl font-['Kanit'] font-medium">
          เที่ยวไหนดี
        </h1>
      </div>
      <div className="px-[220px]">
        <p className="font-['Kanit']">ค้นหาที่เที่ยว</p>
        <div className="pb-8">
          <input
            className="font-['Kanit'] w-full border-b-2"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            value={searchKeywords}
            onChange={(event) => search(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
