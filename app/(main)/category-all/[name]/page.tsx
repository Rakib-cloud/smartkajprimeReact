"use client";
import Subscription from "@/app/components/Subscription/Subscription";
import Banner from "@/app/components/Banner/Banner";
import { convertPageTitle } from "@/app/utils/service";
import { useRouter} from "next/navigation";

export default function Category({ params }: any) {
    const router = useRouter()
    const navigate=() => {
        router.push(`/category-all/${params?.name}/1`)
  }
  const bannerData = {
    title: convertPageTitle(params?.name),
    description:
      "Grammar is essential for communication. It makes texts easier, clearer, and" +
      " more enjoyable to read. Your content becomes irrelevant if your grammar is so poor that" +
      " the work is illegible. Whether you are writing a novel, an essay, an email, a booklet," +
      " or online content, correct grammar is paramount.",
    button: "Explore All",
    func: navigate
  };

    // useEffect(() => {
    //     try{
    //         fetch(`https://jsonplaceholder.typicode.com/todos/${params?.name}`)
    //             .then(response => response.json())
    //             .then(json => console.log(json))
    //     }
    //     catch(error){
    //         console.log("error", error)
    //     }
    //
    // }, [])

  return (
    <main>
      <Banner data={bannerData} />
      <Subscription />
    </main>
  );
}
