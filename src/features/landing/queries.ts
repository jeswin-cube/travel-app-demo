import { useQuery } from "../../common";
import {
  getCategories,
  GetCategoriesResponse,
  GetHighlightDetailsResponse,
  getHighlightDetails,
  getHighlights,
  GetHighlightsResponse,
} from "./api";
import { HighlightsType } from "./types";

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

export const useGetHighlightDetails = (highlightType: HighlightsType) => {
  return useQuery<GetHighlightDetailsResponse>({
    queryKey: "highlightDetails",
    queryFn: async () => await getHighlightDetails(highlightType).then(),
    options: {
      enabled: !!highlightType,
    },
  });
};
