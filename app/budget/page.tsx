"use client";

import { useState } from "react";

// Car brands and their models
const carBrands = {
  Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Tacoma", "Tundra"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey", "Ridgeline"],
  Ford: ["F-150", "Mustang", "Explorer", "Escape", "Focus", "Edge"],
  Chevrolet: ["Silverado", "Equinox", "Malibu", "Tahoe", "Cruze", "Traverse"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "X1", "7 Series"],
  Mercedes: ["C-Class", "E-Class", "GLC", "GLE", "S-Class", "A-Class"],
  Volkswagen: ["Jetta", "Passat", "Tiguan", "Atlas", "Golf", "Arteon"],
  Nissan: ["Altima", "Sentra", "Rogue", "Pathfinder", "Frontier", "Maxima"],
};

const issueTypes = [
  { id: "suspension", name: "Suspension", basePrice: 800 },
  { id: "gearbox", name: "Gearbox", basePrice: 1200 },
  { id: "clutch", name: "Clutch", basePrice: 600 },
  { id: "engine", name: "Engine", basePrice: 2000 },
  { id: "general-service", name: "General Service", basePrice: 150 },
  { id: "brakes", name: "Brakes", basePrice: 400 },
  { id: "transmission", name: "Transmission", basePrice: 1500 },
  { id: "electrical", name: "Electrical", basePrice: 500 },
  { id: "air-conditioning", name: "Air Conditioning", basePrice: 450 },
  { id: "exhaust", name: "Exhaust System", basePrice: 350 },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

export default function Budget() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [estimatedBudget, setEstimatedBudget] = useState<number | null>(null);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel(""); // Reset model when brand changes
  };

  const handleIssueToggle = (issueId: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issueId)
        ? prev.filter((id) => id !== issueId)
        : [...prev, issueId]
    );
  };

  const calculateBudget = () => {
    if (!selectedBrand || !selectedModel || !selectedYear || selectedIssues.length === 0) {
      return;
    }

    let total = 0;
    selectedIssues.forEach((issueId) => {
      const issue = issueTypes.find((i) => i.id === issueId);
      if (issue) {
        total += issue.basePrice;
      }
    });

    // Adjust based on car age (older cars may need more work)
    const carAge = currentYear - parseInt(selectedYear);
    if (carAge > 15) {
      total *= 1.2; // 20% increase for very old cars
    } else if (carAge > 10) {
      total *= 1.1; // 10% increase for old cars
    }

    // Adjust based on luxury brands (BMW, Mercedes)
    if (selectedBrand === "BMW" || selectedBrand === "Mercedes") {
      total *= 1.3; // 30% increase for luxury brands
    }

    setEstimatedBudget(Math.round(total));
  };

  const availableModels = selectedBrand ? carBrands[selectedBrand as keyof typeof carBrands] || [] : [];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              Budget Estimator
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Get an estimate for your car repair costs
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculateBudget();
              }}
              className="space-y-6"
            >
              {/* Car Brand Selection */}
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Car Brand
                </label>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
                >
                  <option value="">Select a brand</option>
                  {Object.keys(carBrands).map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Model Selection */}
              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Car Model
                </label>
                <select
                  id="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedBrand}
                  className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:disabled:bg-zinc-900 dark:disabled:text-zinc-600"
                >
                  <option value="">Select a model</option>
                  {availableModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Car Year Selection */}
              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Car Year
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="mt-2 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
                >
                  <option value="">Select a year</option>
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Issue Types Selection */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Type of Issue (Select all that apply)
                </label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {issueTypes.map((issue) => (
                    <label
                      key={issue.id}
                      className="flex cursor-pointer items-center rounded-lg border border-zinc-300 p-3 transition-colors hover:bg-zinc-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 dark:border-zinc-600 dark:hover:bg-zinc-800 dark:has-[:checked]:bg-blue-900/20"
                    >
                      <input
                        type="checkbox"
                        checked={selectedIssues.includes(issue.id)}
                        onChange={() => handleIssueToggle(issue.id)}
                        className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600"
                      />
                      <span className="ml-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {issue.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                type="submit"
                disabled={
                  !selectedBrand ||
                  !selectedModel ||
                  !selectedYear ||
                  selectedIssues.length === 0
                }
                className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-400 dark:disabled:bg-zinc-700"
              >
                Calculate Budget
              </button>
            </form>

            {/* Budget Result */}
            {estimatedBudget !== null && (
              <div className="mt-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  Estimated Budget
                </h2>
                <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${estimatedBudget.toLocaleString()}
                </p>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  This is an estimated cost based on your selections. Final pricing
                  may vary after inspection.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}