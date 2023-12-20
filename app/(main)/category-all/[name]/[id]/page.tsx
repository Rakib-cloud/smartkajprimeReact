"use client";
import PageHeading from '@/app/components/PageHeading/PageHeading';
import { convertPageTitle } from '@/app/utils/service';
import FilterOptions from './components/FilterOptions/FilterOptions';
import FilterResult from './components/FilterResult/FilterResult';
import UserGuide from '@/app/(main)/user-guide/page';

export default function CategoryDetails({params}:any) {

  const data = {
    pageName: convertPageTitle(params?.name),
    nav: [
      { name: "Home", link: "/" },
      { name: "category", link: "/category" },
    ],
  };
    console.log(params?.id)
    // useEffect(() => {
    //     try{
    //         fetch(`https://jsonplaceholder.typicode.com/todos/${params?.id}`)
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
      <PageHeading data={data} />
      <FilterOptions />
      <FilterResult />
      <UserGuide/>
    </main>
  );
}
