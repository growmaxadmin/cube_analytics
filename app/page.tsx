import Dashboard from "@/components/my-chart/Dasboard";



export default function Home() {
  return (
   <div className="flex flex-col w-full p-8">
   <div className="flex items-center justify-start ml-8">
  <p className="text-4xl font-bold">Dashboard Analysis</p>
   </div>
   <div className="items-center justify-center">
   <Dashboard/>
   </div>

   </div>
  );
}
