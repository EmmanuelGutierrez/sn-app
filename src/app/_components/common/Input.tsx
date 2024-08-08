import React from "react";


// type: React.HTMLInputTypeAttribute | undefined
// children: React.ReactNode
// placeholder: string | undefined

const Input = ({
  type,
  children,
  placeholder,
}: {
  type?: React.HTMLInputTypeAttribute | undefined;
  children: React.ReactNode;
  placeholder?: string | undefined;
}) => {
  return (
    <div className="relative h-11 w-full min-w-[200px] my-6 mx-1">
      <input
        type={type}
        placeholder={placeholder}
        className="peer h-full w-full border-b border-primary bg-transparent pt-4 pb-1.5 text-sm font-normal outline outline-0 transition-all placeholder-shown:border-primary focus:border-primary-dark focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
      />
      <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-dark transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-light after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-dark peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {children}
      </label>
    </div>
  );
};

export default Input;
