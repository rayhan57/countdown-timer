import React, { useState } from "react";
import Timer from "./components/Timer";
import NotifyMe from "./components/NotifyMe";
import BackgroundVideo from "./components/BackgroundVideo";
import ModalForm from "./components/ModalForm";
import { LuTimerReset } from "react-icons/lu";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./utils/localStorage";
import Alert from "./components/Alert";

const App = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({ waiting: "", targetTime: "" });
  const localStorageData = getLocalStorage("formData");
  const [showModal, setShowModal] = useState(localStorageData ? false : true);

  const handleSet = (e) => {
    e.preventDefault();
    setShowModal(false);
    setLocalStorage("formData", formData);
  };

  const handleReset = () => {
    removeLocalStorage("formData");
    setShowModal(true);
    setEmail("");
  };

  const handleNotify = (e) => {
    e.preventDefault();
    setLocalStorage("formData", { ...localStorageData, email: email });
    setShowAlert(true);
    setEmail("");
  };

  return (
    <>
      <BackgroundVideo />

      <div className="flex h-screen flex-col items-center justify-center text-slate-300">
        <ModalForm
          showModal={showModal}
          formData={formData}
          setFormData={setFormData}
          handleSet={handleSet}
        />

        <h1 className="text-5xl font-bold lg:text-6xl">COMING SOON!</h1>
        <p className="font-light">{localStorageData?.waiting} coming soon</p>

        <Timer
          localStorageData={localStorageData}
          targetTime={localStorageData?.targetTime}
          modalShow={showModal}
          setModalShow={setShowModal}
        />

        <button
          className="mt-3 flex items-center gap-1 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-gradient-to-br"
          onClick={handleReset}
        >
          <LuTimerReset size={16} /> Reset
        </button>

        <Alert showAlert={showAlert} setShowAlert={setShowAlert} />

        <NotifyMe
          localStorageData={localStorageData}
          handleNotify={handleNotify}
          email={email}
          setEmail={setEmail}
        />
      </div>
    </>
  );
};

export default App;
