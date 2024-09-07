import { baseUrl } from "@/config";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseUrl.get("/categories");
        const filterCategory = response?.data?.data?.data?.map(item => ({ category_name: item.category_name, id: item?.id }))
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
