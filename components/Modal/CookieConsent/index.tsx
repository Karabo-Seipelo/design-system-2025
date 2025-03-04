import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";

interface OverLayProps {
  children: React.ReactNode;
}

const Overlay: React.FC<OverLayProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      {children}
    </div>
  );
};

const CookieConsent = () => {
  return (
    <Overlay>
      <div className="flex absolute bottom-0 left-0 right-0">
        <div className="w-full bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
          <h3 className="font-semibold text-base text-neutral-900">
            We use cookies
          </h3>
          <p className="mt-2 text-sm">
            We use cookies to enhance your browsing experience and improve our
            website's performance. By continuing to use this site, you consent
            to the use of cookies. To learn more about how we use cookies and
            your options, please read our cookie policy.
          </p>
          <footer className="mt-4 flex flex-col md:flex-row gap-2 justify-between">
            <Button
              className="bg-indigo-700 px-4 py-2.5 rounded text-white"
              onClick={close}
            >
              Decline all
            </Button>
            <div className="flex flex-col gap-2 md:flex-row">
              <Button
                className="bg-white  px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200"
                onClick={close}
              >
                Allow cookies
              </Button>
              <Button
                className="bg-red-600 px-3.5 py-2.5 rounded text-white"
                onClick={close}
              >
                Manage cookies
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </Overlay>
  );
};

export default CookieConsent;
