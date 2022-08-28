import React from "react";

const LinkInputField: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const showHtmlElement = () => {
    switch (selectedValue) {
      case "existingLink":
        return (
          <div className="flex flex-col">
            <label htmlFor="existingUrl">Existing Url</label>
            <input
              type="text"
              id="exitistingUrl"
              placeholder="insert the backlink of an existing url"
              className="rounded-md focus:border-black focus:ring-black"
            />
          </div>
        );
      default:
        return (
          <div className="flex flex-col">
            <label htmlFor="longUrlLink">Destination Url</label>
            <input
              type="text"
              id="longUrlLink"
              placeholder="ex. https://longurl.com"
              className="rounded-md focus:border-black focus:ring-black"
            />
          </div>
        );
    }
  };

  return (
    <form className="space-y-6 rounded-lg border border-gray-400 px-3 py-4 text-black ">
      <div className="flex flex-col">
        <label htmlFor="button-label">Button label</label>
        <input
          type="text"
          placeholder="ex. My webpage"
          aria-label="button-label"
          id="button-label"
          className="rounded-md focus:border-black focus:ring-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="swiftUrlLink">Swifturl Link</label>
        <select
          name="swiftUrlLink"
          id="swiftUrlLink"
          className="rounded-md focus:border-black focus:ring-black"
          onChange={handleSelect}
        >
          <option value="newLink">New link</option>
          <option value="existingLink">existing Link</option>
        </select>
      </div>
      <div className="bg-gray-200 p-4 text-black">
        {showHtmlElement()}
      </div>
      <div className="flex justify-end gap-5 ">
        <button className="py rounded-md px-3 text-base text-red-500 hover:bg-gray-300 ">
          cancel
        </button>
        <button className="rounded-md  bg-black px-4 py-3 text-xl text-white">
          create
        </button>
      </div>
    </form>
  );
};

export default LinkInputField;
