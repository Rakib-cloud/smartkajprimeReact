"use client";
import PageHeading from "@/app/components/PageHeading/PageHeading";
function staticPage() {
  const data = {
    pageName: "Static Page",
    nav: [
      { name: "Home", link: "/" },
      { name: "Static page", link: "/staticPage" },
    ],
  };
  return (
    <main>
      <PageHeading data={data} />
      <div className="container">
        <p className="leading-8 text-gray-800">
          If learners want to learn something well, they must practice it often.
          If they’re going to speak fluently, they should converse in the
          language and listen carefully. Listening is perhaps even more
          important than speaking as it helps one understand what people are
          saying, which is better than talking. Learning grammatical rules will
          help learners to communicate appropriately when talking is required,
          such as while ordering food at a restaurant or making plans with
          friends. If learners want to use their new skills to converse with
          native speakers quickly and easily, they must take time to practice
          speaking the language daily.
        </p>
      </div>
    </main>
  );
}

export default staticPage;
