import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCategory from "@/hooks/useCategory";
import { ChevronDown } from "lucide-react";

const SearchCourse = ({ setTitle }) => {
  const { category: catagories } = useCategory();

  return (
    <div className="border rounded-full h-14 flex items-center  gap-2 px-2 mt-10">
      <input
        type="text"
        placeholder="Select course to auto search..."
        className="h-full w-[50%] lg:w-[88%] bg-transparent outline-none pl-4"
      />
      <DropdownMenu>
        <DropdownMenuTrigger className="border h-[80%] px-5 rounded-3xl bg-[#e1ecf4] text-primary flex  items-center">
          Courses <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {catagories?.map((category, index) => (
            <DropdownMenuItem
              className="capitalize"
              key={index}
              onClick={() => setTitle(category.id)}
            >
              {category.category_name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <button className="bg-primary h-11 w-11 flex items-center justify-center rounded-full">
        <Search color="#ffd" />
      </button> */}
    </div>
  );
};

export default SearchCourse;
