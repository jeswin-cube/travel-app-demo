import { get } from "../../common";
import { postProcess } from "../../common/api/post-process";
import { Category, Highlight } from "./types";

export type GetHighlightsResponse = Highlight[];

export type GetCategoriesResponse = Category[];

export const getHighlights = async () => {
  return await get<GetHighlightsResponse, {}>("/v1/highlights").then(postProcess);
};

export const getCategories = async () => {
  return await get<GetCategoriesResponse, {}>("/v1/categories").then(postProcess);
};
