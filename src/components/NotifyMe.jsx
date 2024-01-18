import React from "react";

const NotifyMe = ({ localStorageData, handleNotify, email, setEmail }) => {
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mt-3">
      <p className="mb-2 font-light">
        Get notified when the {localStorageData?.waiting} launches!
      </p>
      <form
        className="overflow-hidden rounded-full bg-white"
        onSubmit={handleNotify}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="border-0 text-sm text-black focus:ring-0 lg:text-base"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button className="float-right rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 px-3 py-2 text-sm hover:bg-gradient-to-br lg:text-base">
          Notify me
        </button>
      </form>
    </div>
  );
};

export default NotifyMe;
