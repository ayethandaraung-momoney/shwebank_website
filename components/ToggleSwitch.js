import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <Switch.Label className="mr-4">EN</Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-gray-999" : "bg-gray-999"}
          relative inline-flex flex-shrink-0 h-[30px] w-[70px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-8" : "translate-x-0"}
            pointer-events-none inline-block h-[27px] w-[35px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </Switch.Group>
  );
}
