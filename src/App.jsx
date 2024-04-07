import React, { useContext, useState } from "react";
import Search from "./components/search/search";
import Sidebar from "./components/sidebar/sidebar";
import Question from "./components/qna/question";
import Footer from "./components/footer/footer";
import { Ques } from "./contexts/qusandanscontext";
import Navbar from "./components/header/header";

function App() {
  const { topics } = useContext(Ques);
const [renderlist, setrenderlist] = useState( topics.find((topic) => topic.name === "Domains")?.questions || [])

  const handleOptionChange = (optionName) => {
    setrenderlist(topics.find((topic) => topic.name === optionName)?.questions || []);
  };
  const search = (e) => {
    const searchval = e.target.value;
    const newList = [];
    topics.forEach(element => {
        element.questions.forEach((elem)=>{
            if(elem.q.includes(searchval)){
              newList.push(elem);
            }
        });
    });
    setrenderlist(newList);
    console.log(newList);
};
  return (
    <>
      <Navbar />
      <main className='w-full'>
        <div className='w-full flex justify-center bg-[#f5f5f5]'>
          <div className='container p-5 bg-[#f5f5f5]'>
            <Search searchFunction={search} />
            <div className='flex justify-start'>
              <Sidebar render={handleOptionChange} />
              <Question questions={renderlist} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
