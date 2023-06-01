import { useQuery } from "../../common";
import { getCategories, GetCategoriesResponse, getHighlights, GetHighlightsResponse } from "./api";

export const useGetHighlights = () => {
  return useQuery<GetHighlightsResponse>({
    queryKey: "highlights",
    queryFn: async () => await getHighlights().then(),
    options: {},
  });
};

export const useGetCategories = () => {
  return useQuery<GetCategoriesResponse>({
    queryKey: "categories",
    queryFn: async () => await getCategories().then(),
    options: {},
  });
};
