import React from "react";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <Image
        src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
        alt="404"
        width={800}
        height={800}
      />
    </div>
  );
};

export default NotFoundPage;
