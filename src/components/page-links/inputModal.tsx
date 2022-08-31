import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
}
export default function InputModal({isOpen,closeModal }:Props) {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" flex h-full max-w-2xl transform flex-col justify-around overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Image
                  </Dialog.Title>
                  <div className="space-y-5">
                    <div className="flex h-48 flex-col items-center justify-center space-y-2 rounded-lg bg-gray-400 py-4">
                      <button className="w-fit rounded-md bg-blue-400 p-2">
                        Send Image
                      </button>
                      <p>or</p>
                      <p>You can also drag and drop images here</p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ullam aliquam quidem omnis quasi esse repellat
                        unde? Vel inventore architecto perspiciatis.
                      </p>
                    </div>
                    <div className="gay-y-2 flex flex-col">
                      <label htmlFor="imageAddress">Image Address</label>
                      <input
                        type="text"
                        id="imageAddress"
                        placeholder="placeholder url "
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-16 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Send
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
