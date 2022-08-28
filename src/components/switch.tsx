import { Switch } from "@headlessui/react";

type props = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};
export default function SwitchComponent({ enabled, setEnabled }: props) {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-green-600" : "bg-gray-300"}
          relative inline-flex h-[34px] w-[69px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">disable this link in page</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
