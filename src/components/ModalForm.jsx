import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModalForm = ({ showModal, formData, setFormData, handleSet }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const updatedFormData = {
      ...formData,
      [id]: id === "targetTime" ? new Date(value).getTime() : value,
    };
    setFormData(updatedFormData);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="absolute w-full rounded-lg px-5 py-10 backdrop-blur md:w-1/2 lg:py-12"
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{ duration: 1 }}
          >
            <form className="text-black" onSubmit={handleSet}>
              <h1 className="mb-5 text-center text-2xl font-semibold uppercase text-slate-200">
                set a schedule
              </h1>
              <label htmlFor="waiting" className="text-slate-300">
                What are you waiting for?
              </label>
              <input
                id="waiting"
                type="text"
                placeholder="ex: New favorite movie"
                className="mb-3 block w-full rounded-full border-0 bg-slate-200 focus:ring-0"
                onChange={handleInputChange}
                required
              />

              <label htmlFor="targetTime" className="text-slate-300">
                Set a waiting time
              </label>
              <input
                id="targetTime"
                type="datetime-local"
                className="mb-3 block w-full rounded-full border-0 bg-slate-200 focus:ring-0"
                onChange={handleInputChange}
                required
              />

              <button className="mt-3 w-full rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 px-3 py-2 font-semibold text-white hover:bg-gradient-to-br">
                SET
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalForm;
