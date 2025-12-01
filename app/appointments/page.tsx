import Calendar from "../components/Calendar";

export default function Appointments() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
          Appointments
        </h1>
        <Calendar />
      </div>
    </div>
  );
}