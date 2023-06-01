import { useQuery } from "../../common";
import { getHighlights, GetHighlightsResponse } from "./api";

export const useGetHighlight = () => {
  return useQuery<GetHighlightsResponse>({
    queryKey: "highlights",
    queryFn: async () => await getHighlights().then(),
    options: {},
  });
};
