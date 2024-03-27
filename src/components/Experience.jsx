import React from 'react';

function Experience() {
  return (
    <div className=" h-auto p-4">
      <div className="flex justify-center ">
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
        <h1 className="text-3xl">Experience</h1>
        <hr className="flex-grow border-t-2 border-black m-4"></hr>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/4 border-r-2 border-black p-4">
          <div className=" border-b-2 border-black ">
            <h1 className="text-2xl">Organizing Secretary</h1>
            <p>RDA, CUET</p>
          </div>
          <p>June 2023 - Present</p>
        </div>
        <div className="basis-3/4 p-6">
          <ul>
            <li className="list-disc	">Rangpur Division Association, CUET</li>
            <li className="list-disc	">It is a Divisional Organization</li>

            <li className="list-disc	">Different Program Organise every year</li>
            <li className="list-disc	">
              Many Teacher and students are part of it
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
