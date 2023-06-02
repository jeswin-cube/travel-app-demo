import { get } from "../../common";
import { postProcess } from "../../common/api/post-process";
import { Category, Highlight, HighlightDetails, HighlightsType } from "./types";

export type GetHighlightsResponse = Highlight[];

export type GetCategoriesResponse = Category[];

export type GetHighlightDetailsResponse = HighlightDetails;

export const getHighlights = async () => {
  return await get<GetHighlightsResponse, {}>("/v1/highlights").then(postProcess);
};

export const getCategories = async () => {
  return await get<GetCategoriesResponse, {}>("/v1/categories").then(postProcess);
};

export const getHighlightDetails = async (highlightType: HighlightsType) => {
  return await get<GetHighlightDetailsResponse, {}>(`/v1/activities/${highlightType}`).then(postProcess);
};
