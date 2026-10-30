// Central project data for the portfolio and /projects/[slug] pages.
//
// Screenshot files live in public/ and are referenced directly below. The two
// entries here are the only projects featured on the site; keep liveUrl and
// githubUrl pointed at real, public destinations.

export const projects = [
  {
    slug: "fitlog",
    number: "01",
    title: "FitLog",
    tagline: "Fitness tracking and workout planning, built around a better habit.",
    description:
      "A fitness planning web application that allows users to explore workout plans, save exercises, and manage their fitness activities through a clean and user-friendly interface.",
    purpose:
      "FitLog was built to make planning a workout feel as simple as checking a to-do list. Instead of juggling notes and separate fitness apps, users can explore plans, save the exercises they want, and see their daily workout come together in one place.",
    status: "Live",
    accent: "emerald",
    monogram: "FL",
    category: "Fitness planning",
    image: "/fit-log.jpeg",
    imageAlt:
      "FitLog fitness tracking and workout planning app shown on desktop and mobile",
    tech: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://b14-a6-fitlog-nine.vercel.app/",
    githubUrl: "https://github.com/prantodev1/b14-a6-fitlog",
    overview:
      "FitLog is a streamlined gym companion that brings exercise discovery, a daily workout plan, and live workout totals into a single responsive interface. Users can browse workout plans, save exercises, and manage their fitness routine without losing their place.",
    features: [
      "Explore workout plans and exercises in a clean, searchable library",
      "Save exercises and build a daily workout plan",
      "See workout duration and estimated calories update with the plan",
      "Review target muscles, difficulty, and ratings for each exercise",
      "Filter and sort exercises by duration, calories, or rating",
      "Keep the active plan available after a page refresh",
    ],
    challenges: [
      {
        title: "Keeping a plan intact after refresh",
        solution:
          "The selected exercises and active daily plan are stored in the browser, then restored when the app loads so users do not lose their progress.",
      },
      {
        title: "Making workout totals easy to trust",
        solution:
          "Duration and calorie totals are derived from the current exercise selection, so the summary updates whenever the plan changes.",
      },
    ],
    improvements: [
      "Add user accounts and cloud sync across devices",
      "Build weekly history and progress charts",
      "Let users create and save custom exercises",
    ],
  },
  {
    slug: "bazar-dor",
    number: "02",
    title: "Bazar Dor",
    banglaTitle: "বাজার দর",
    tagline: "Everyday market prices, organized for smarter shopping.",
    description:
      "A Bangla-based product price information platform designed to help users explore products, browse categories, and access useful market price information through a simple and responsive interface.",
    purpose:
      "Bazar Dor was created to make everyday market prices easier to explore. The goal is to help people browse products and categories in Bangla, find useful price information quickly, and make more informed shopping decisions from one clear interface.",
    status: "Live",
    accent: "cyan",
    monogram: "BD",
    category: "Market price platform",
    image: "/bazar-dor.jpeg",
    imageAlt:
      "Bazar Dor Bangla product price information platform shown on desktop and mobile",
    tech: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://my-bazardor-app.vercel.app/",
    githubUrl: "https://github.com/prantodev1/b14-a7-bazardor-app",
    overview:
      "Bazar Dor is a Bangla-first product price information platform. It gives users a simple way to explore products, move through categories, and read market price information in a responsive interface designed for everyday use.",
    features: [
      "Browse products and categories in Bangla",
      "View useful market price information in a clear, scannable layout",
      "Explore product details from a responsive catalog",
      "Load product information through a REST API",
      "Use the same experience across mobile, tablet, and desktop",
    ],
    challenges: [
      {
        title: "Designing around Bangla content",
        solution:
          "The interface uses generous spacing, readable type sizes, and flexible cards so Bangla product names and price labels stay clear at every breakpoint.",
      },
      {
        title: "Making price data easy to scan",
        solution:
          "Product cards, consistent spacing, and a restrained visual hierarchy keep names and prices easy to compare without visual noise.",
      },
    ],
    improvements: [
      "Add historical price trends and side-by-side comparisons",
      "Expand filtering by category, location, and budget",
      "Add saved shopping lists for planning regular purchases",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function getRelatedProjects(slug, limit = 2) {
  return projects
    .filter((project) => project.slug !== slug)
    .slice(0, limit);
}
