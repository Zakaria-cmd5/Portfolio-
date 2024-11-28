interface Props {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectedOption: string[];
  setSelectedOption: (value: string[]) => void;
  allowMultiple: boolean;
}

const SelectInput = ({
  allowMultiple,
  id,
  selectedOption,
  setSelectedOption,
  text,
  type,
}: Props) => {
  const optionChangeHandler = (option: string) => {
    if (allowMultiple) {
      const currentIndex = selectedOption.findIndex(
        (selected) => selected === option
      );
      const newSelectedOptions = [...selectedOption];
      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex, 1);
      }
      setSelectedOption(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectedOption(newSelectedOptions);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOption.includes(id)}
        onChange={() => optionChangeHandler(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
