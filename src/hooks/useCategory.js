import { baseUrl } from "@/config";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const deleteCategories = [
    "app development",
    "Web Development",
    "ux/ui design",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseUrl.get("/category");
        const filterCategory = response?.data?.data.filter(
          (category) => !deleteCategories.includes(category.category_name)
        );

        setCategory(filterCategory);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { category, isLoading, error };
};

export default useCategory;
