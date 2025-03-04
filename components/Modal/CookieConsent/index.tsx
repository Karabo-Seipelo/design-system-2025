import { useCallback, useMemo } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Switch,
  Description,
} from "@headlessui/react";
import useModal from "./useModal";
import useCookies, { Cookies } from "./useCookies";
import Overlay from "./Overlay";

type CookieButton = {
  label: string;
  type:
    | "accept"
    | "decline"
    | "manage"
    | "acceptModal"
    | "declineModal"
    | "saveModal";
  groupWithNext?: boolean;
};

type CookieConsentProps = {
  title: string;
  description: string;
  modal: {
    cookies: Cookies[];
    buttons: CookieButton[];
  };
  buttons: CookieButton[];
};

const CookieConsent: React.FC<CookieConsentProps> = ({
  title,
  description,
  modal,
  buttons,
}) => {
  const consentCookies = localStorage.getItem("consentCookies");
  const parsedConsentCookies = useMemo(() => {
    try {
      return consentCookies ? JSON.parse(consentCookies) : [];
    } catch (error) {
      console.error("Failed to parse consent cookies", error);
      return [];
    }
  }, [consentCookies]);
  const { cookies } = modal;
  const { isOpen, openModal, closeModal } = useModal(false);
  const { enabledCookies, setEnabledCookies } = useCookies(
    cookies,
    parsedConsentCookies,
  );

  const handleSwitchChange = useCallback(
    (cookieName: string, checked: boolean) => {
      setEnabledCookies((prev) =>
        prev.map((cookie) =>
          cookie.name === cookieName ? { ...cookie, enabled: checked } : cookie,
        ),
      );
    },
    [setEnabledCookies],
  );

  const save = useCallback(() => {
    const mappedCookies = enabledCookies
      .filter((cookie) => cookie.enabled)
      .map((cookie) => cookie.name);
    localStorage.setItem("consentCookies", JSON.stringify(mappedCookies));
    closeModal();
  }, [enabledCookies, closeModal]);

  const declineAll = useCallback(() => {
    setEnabledCookies((prev) =>
      prev.map((cookie) =>
        cookie.name === "essential"
          ? { ...cookie, enabled: true }
          : { ...cookie, enabled: false },
      ),
    );
    openModal();
  }, [setEnabledCookies, openModal]);

  const acceptAll = useCallback(() => {
    setEnabledCookies((prev) =>
      prev.map((cookie) => ({ ...cookie, enabled: true })),
    );
    openModal();
  }, [setEnabledCookies, openModal]);

  const renderCookieItem = useCallback(
    (cookie: Cookies) => {
      const { name, description } = cookie;
      const currentCookie = enabledCookies.find((c) => c.name === cookie.name);

      return (
        <li key={name} className="flex flex-col justify-center gap-2">
          <header className="flex justify-between gap-2">
            <h3 className="font-semibold text-base text-neutral-900 capitalize">
              {name}
            </h3>
            {currentCookie && (
              <Switch
                checked={currentCookie.enabled}
                onChange={(checked) => handleSwitchChange(name, checked)}
                className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-gray-100 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-indigo data-[checked]:bg-indigo-700"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-gray-300 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4 group-data-[checked]:bg-white"
                />
              </Switch>
            )}
          </header>
          <div className="text-sm text-neutral-600">{description}</div>
        </li>
      );
    },
    [enabledCookies, handleSwitchChange],
  );

  const renderButtons = useCallback(
    (button: CookieButton, buttons: CookieButton[], index: number) => {
      const classes = {
        accept: "bg-indigo-700 px-4 py-2.5 rounded text-white",
        decline: "bg-red-600 px-3.5 py-2.5 rounded text-white",
        manage:
          "bg-white  px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200",
        acceptModal: "bg-indigo-700 px-4 py-2.5 rounded text-white basis-1/2",
        saveModal:
          "bg-white  px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200 basis-1/2",
        declineModal: "bg-red-600 px-3.5 py-2.5 rounded text-white",
      };
      const handleClick = {
        accept: acceptAll,
        decline: declineAll,
        manage: openModal,
        acceptModal: acceptAll,
        saveModal: save,
        declineModal: declineAll,
      };
      const nextButton = buttons[index + 1];
      const isGrouped = button.groupWithNext && nextButton;

      if (isGrouped) {
        return (
          <div
            key={index}
            className={`flex gap-2 ${button.type === "acceptModal" ? "flex-row w-full" : "flex-col md:flex-row"} order-1 md:order-2`}
          >
            <Button
              className={`${classes[button.type]} px-4 py-2.5`}
              onClick={handleClick[button.type]}
            >
              {button.label}
            </Button>
            <Button
              className={`${classes[nextButton.type]} px-4 py-2.5`}
              onClick={handleClick[nextButton.type]}
            >
              {nextButton.label}
            </Button>
          </div>
        );
      }

      if (index > 0 && buttons[index - 1].groupWithNext) {
        return null;
      }

      return (
        <Button
          key={button.label}
          className={`${classes[button.type]} px-4 py-2.5 gap-1.5 order-2 md:order-1`}
          onClick={handleClick[button.type]}
        >
          {button.label}
        </Button>
      );
    },
    [acceptAll, declineAll, openModal, save],
  );

  return (
    <Overlay>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-neutral-950/70 flex justify-center items-center"
      >
        <DialogPanel className="flex flex-col gap-6 p-6 bg-white md:w-[458px] lg:w-[384px]">
          <Description as="div">
            <ul className="flex flex-col gap-4">
              {modal.cookies.map(renderCookieItem)}
            </ul>
          </Description>
          <footer className="mt-4 flex flex-col gap-2 justify-start">
            {modal.buttons.map((button, index) =>
              renderButtons(button, modal.buttons, index),
            )}
          </footer>
        </DialogPanel>
      </Dialog>

      <div className="flex absolute bottom-0 left-0 right-0">
        <div className="w-full bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 p-4 md:px-8 md:py-6 lg:px-26 gap-6">
          {title && (
            <h3 className="font-semibold text-base text-neutral-900">
              {title}
            </h3>
          )}
          {description && (
            <div
              className="mt-2 text-sm text-neutral-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          <footer className="mt-4 flex flex-col md:flex-row gap-2 justify-between">
            {buttons.map((button, index) =>
              renderButtons(button, buttons, index),
            )}
          </footer>
        </div>
      </div>
    </Overlay>
  );
};

export default CookieConsent;
