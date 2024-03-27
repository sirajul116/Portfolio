import React from 'react';
import ToDo from '../assets/ToDo.png';
function Project() {
  return (
    <div className=" bg-slate-400  h-auto p-4">
      <div className="flex justify-center ">
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
        <h1 className="text-3xl">Project</h1>
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
      </div>
      <div className="flex flex-row justify-center p-6">
        <div className="basis-1/2 border-2 p-2">
          <img src={ToDo} alt="ToDo" />
        </div>
        <div className="basis-1/2 p-2">
          <h1 className=" text-3xl">ToDo</h1>
          <p className="border-b-2 border-black">
            Todo is a daily tracking project of our daily stuffs. We plan
            various thing to do in a day but sometime it is very hard to keep
            track of those. So make it easy track on a list implemented this
            project as Todo App.
          </p>
          <div className="flex justify-between p-4">
            <p>
              <b>Tools:</b>
            </p>
            <p>React </p> <p>React-Redux-toolkit</p> <p> Material-ui</p>
          </div>
          <div className="flex space-x-3 ">
            <a href="https://github.com/sirajul116/ToDo">
              <i class="fa-brands  fa-github text-3xl"></i>
            </a>
            <a href="https://sirajul116.github.io/ToDo/">
              <i class="fa-solid fa-up-right-from-square text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
