import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Gurgaon", "Bangalore", "Pune", "Mumbai", "Hyderabad"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "Ai-Ml Developer",
      "Java Developer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-40k",
      "40-1lakh",
      "1lakh-3lakh",
      "3lakh-5lakh",
      "5lakh-10lakh",
      "10lakh-20lakh",
    ],
  },
];

function FilterCard() {
  return (
    <div >
      <h1 className="font-bold">Filter Job</h1>
      <hr className="mt-2" />
      <RadioGroup className="flex flex-col gap-4 ">

        {filterData.map((data, i) => (

          <div className="flex flex-col gap-1 " key={i}>
            <h1 className="font-bold">{data.filterType}</h1>

            {data.array.map((item, i) => (
              <div className="flex gap-2 items-center" key={i}>
                <RadioGroupItem value={item} />
                <label>{item}</label>
              </div>
            ))}

          </div>
        ))}

      </RadioGroup>
    </div>
  );
}

export default FilterCard;
