const AccordionAnswerText = ({ data, setSelectCategory }) => {
  return (
    <div className="mb-4" onClick={() => setSelectCategory(data.id)}>
      <div className="flex items-center gap-2">
        <input type="radio" id={data.category_name} name="category" />
        <label
          htmlFor={data.category_name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
        >
          {data.category_name}
        </label>
      </div>
    </div>
  );
};

export default AccordionAnswerText;
