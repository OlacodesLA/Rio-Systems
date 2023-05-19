import React from "react";

const Navigation = ({name}) => {
  return <div className="">
    <div className="w-full  border-y-[1px] border-best border-solid  ">
        <div className="mx-auto max-w-[1390px] w-full py-2 text-primary font-semibold"> <p className="">
        &lt; Services &nbsp; &lt; {name}
        </p>
        </div>
    </div>
  </div>;
};

export default Navigation;
