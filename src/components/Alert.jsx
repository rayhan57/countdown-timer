import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ showAlert, setShowAlert }) => {
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="mt-10 rounded-lg bg-green-500 px-3 py-1.5 text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notification will be sent to the email address you entered
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Alert;
