import { useState } from "react";

const content = {
  Programmering: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam
      aliquam tempore. Voluptas, odit fugit. Id, quaerat quidem assumenda nam
      labore iste aspernatur in aut doloremque, illo fuga deleniti perspiciatis.
    </div>
  ),
  Musik: <div>btuhh </div>,
  Gym: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam
      aliquam tempore. Voluptas, odiwerwerwest fugit. Id, quaerat quidem
      assumenda nam labore iste aspernatur in aut doloremque, illo fuga deleniti
      perspiciatis.
    </div>
  ),
};

function Tab({ name, isActive }: { name: string; isActive?: boolean }) {
  return (
    <div
      className={
        isActive
          ? "flex rounded-2xl bg-white px-5 py-2 shadow transition-all hover:-translate-y-1 hover:text-black hover:shadow-lg active:scale-95"
          : "flex rounded-2xl px-5 py-2 shadow transition-all hover:-translate-y-1 hover:text-black hover:shadow-lg active:scale-95"
      }
    >
      {name}
    </div>
  );
}

type Tabs = "Programmering" | "Musik" | "Gym";
type TabsObj = { id: Tabs; name: string };
export default function VemArJag() {
  const [tabs, setTabs] = useState<TabsObj[]>([
    { id: "Programmering", name: "🧑‍💻 Programmering" },
    { id: "Musik", name: "🎵 Musik" },
    { id: "Gym", name: "💪 Gym" },
  ]);
  const [selectedTab, setSelectedTab] = useState<Tabs>("Programmering");

  return (
    <div className="relative z-20">
      <svg
        className="absolute top-0 origin-bottom -translate-y-full scale-y-[0.3]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-zinc-200"
          fill-opacity="1"
          d="M0,320L60,277.3C120,235,240,149,360,149.3C480,149,600,235,720,272C840,309,960,299,1080,250.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-zinc-200 px-12 pb-36 pt-28">
        <h2 className="mb-16 text-center text-4xl font-black">Vem är jag?</h2>
        <div className="mx-auto mb-6 flex w-fit gap-4 p-4 text-lg font-semibold text-zinc-600">
          {tabs.map((tab) => (
            <button onClick={() => setSelectedTab(tab.id)}>
              <Tab
                key={tab.id}
                name={tab.name}
                isActive={selectedTab === tab.id}
              />
            </button>
          ))}
        </div>
        <div className=" mx-auto w-full max-w-3xl">{content[selectedTab]}</div>
      </div>
    </div>
  );
}
