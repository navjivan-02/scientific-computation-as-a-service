import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ComputationForm, ComputationData } from "@/components/ComputationForm";
import { ResultsDisplay, ComputationResult } from "@/components/ResultsDisplay";
import { Footer } from "@/components/Footer";

export default function Index() {
  const [result, setResult] = useState<ComputationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCompute = async (data: ComputationData) => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      // Convert variables to the format expected by the API (string values)
      const apiVariables: Record<string, string> = {};
      Object.entries(data.variables).forEach(([key, value]) => {
        apiVariables[key] = value.toString();
      });

      // Call the local proxy endpoint to avoid CORS issues
      const response = await fetch("/api/compute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: data.expression.replace(/\^/g, "**"), // Convert ^ to ** for Python
          operation: data.operation,
          variables: apiVariables,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const apiResult = await response.json();
      const executionTime = Date.now() - startTime;

      // Convert API response to our result format
      const result: ComputationResult = {
        input: data,
        output: {
          symbolic: apiResult.symbolic_result,
          numerical: apiResult.numeric_result,
          steps: [
            `Input: ${apiResult.input}`,
            `Operation: ${apiResult.operation}`,
            ...(Object.keys(apiResult.variables || {}).length > 0
              ? [
                  `Variables: ${Object.entries(apiResult.variables)
                    .map(([k, v]) => `${k} = ${v}`)
                    .join(", ")}`,
                ]
              : []),
            `Result: ${apiResult.symbolic_result}`,
            ...(apiResult.numeric_result
              ? [`Numerical: ${apiResult.numeric_result}`]
              : []),
          ],
        },
        timestamp: new Date(),
        executionTime,
      };

      setResult(result);

      // Auto-scroll to results after computation
      setTimeout(() => {
        const resultsSection = document.querySelector(
          '[data-scroll-target="results-display"]',
        );
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } catch (error) {
      const executionTime = Date.now() - startTime;
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      const errorResult: ComputationResult = {
        input: data,
        output: {
          error: `Computation failed: ${errorMessage}. Please check your expression and try again.`,
        },
        timestamp: new Date(),
        executionTime,
      };
      setResult(errorResult);

      // Auto-scroll to error results too
      setTimeout(() => {
        const resultsSection = document.querySelector(
          '[data-scroll-target="results-display"]',
        );
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        <HeroSection />

        <ComputationForm onCompute={handleCompute} isLoading={isLoading} />

        <ResultsDisplay result={result} />
      </main>

      <Footer />
    </div>
  );
}
