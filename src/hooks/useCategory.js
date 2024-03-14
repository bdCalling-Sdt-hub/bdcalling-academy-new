import { baseUrl } from "@/config";
import { useEffect, useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseUrl.get("/category");
        setCategory(response.data.data);
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
