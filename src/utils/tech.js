/** The API stores `tech` as one delimited string, e.g. "React, Node, MongoDB". */
export const splitTech = (tech) =>
  (tech || "")
    .split(/[,/|]/)
    .map((item) => item.trim())
    .filter(Boolean);
