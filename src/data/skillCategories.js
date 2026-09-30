/**
 * Display order for skill groups. Must stay in step with the dashboard's
 * src/config/skillCategories.ts — that's where new groups get added.
 */
export const SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend & Databases",
  "AI & Automation",
  "Payments",
  "DevOps & Tooling",
  "Other",
];

export const DEFAULT_CATEGORY = "Other";

const rank = (category) => {
  const index = SKILL_CATEGORIES.indexOf(category);
  return index === -1 ? SKILL_CATEGORIES.length : index;
};

/**
 * Turns the flat API list into ordered [category, skills] pairs.
 * Skills saved before categories existed have none, so they collect
 * under "Other" rather than disappearing.
 */
export const groupSkills = (skills = []) => {
  const byCategory = new Map();

  skills.forEach((skill) => {
    const category = skill?.category?.trim() || DEFAULT_CATEGORY;
    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category).push(skill);
  });

  return [...byCategory.entries()].sort(
    ([a], [b]) => rank(a) - rank(b) || a.localeCompare(b)
  );
};
