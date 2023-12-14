import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ModalProps {
  title: string;
  content: string[];
  buttonLabel: string;
}

const Modal: React.FC<ModalProps> = ({ title, content, buttonLabel }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      modal.addEventListener("close", handleCloseModal);
    }

    return () => {
      if (modal) {
        modal.removeEventListener("close", handleCloseModal);
      }
    };
  }, []);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior (e.g., following a link)
    const modal = modalRef.current;
    if (modal) {
      modal.showModal();
    }
  };

  const handleCloseModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <button
        className="border-none bg-transparent text-sm font-semibold relative z-10 overflow-auto"
        onClick={(e) => handleOpenModal(e)}>
        <span className="relative z-10 text-blue-50 hover:text-slate-500 max-[600px]:text-sm">
          {buttonLabel} &rarr;
        </span>
        <span className="text-blue-50 fa fa-arrow-right hover:transform hover:translate-x-1/2 transition-transform duration-300 ease-in"></span>
      </button>

      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <form method="dialog" className="modal-box bg-white text-[#526D82]">
          <h3 className="font-semibold text-xl">{title}</h3>
          <ul className="mt-10">
            {content.map((item, index) => (
              <li className="my-3 flex gap-3" key={index}>
                <Image
                  src="/icon/check.svg"
                  alt="icon"
                  width={15}
                  height={15}
                  className="w-auto h-auto"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="modal-action">
            <button
              className="btn bg-bluetext-blue-50 text-[#fff] border-none bg-blue-50 hover:bg-gray-20"
              onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
