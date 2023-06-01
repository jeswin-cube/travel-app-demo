import { get } from "../../common";
import { postProcess } from "../../common/api/post-process";
import { Highlight } from "./types";

export type GetHighlightsResponse = Highlight[];

export const getHighlights = async () => {
  return await get<GetHighlightsResponse, {}>("/v1/highlights").then(postProcess);
};
